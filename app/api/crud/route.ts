import { db, pantryTrackerTable } from "@/lib/drizzle";
import { eq,and } from 'drizzle-orm'; // Ensure you have the correct import
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams;

  if (url.has('userid')) {
    const userid = url.get('userid');
    if (!userid) {
      return NextResponse.json({ message: "Userid is empty!" });
    }

    const userData = await db
      .select()
      .from(pantryTrackerTable)
      .where(eq(pantryTrackerTable.userid, userid));

    return NextResponse.json(userData);
  } else {
    return NextResponse.json({ message: "Userid not found!" });
  }
}


export async function POST(req:NextRequest){
 const body = await req.json();

 const alreadyItem = await db.select().from(pantryTrackerTable).where(and(eq(pantryTrackerTable.userid,body.userid)
 ,eq(pantryTrackerTable.itemid,body.itemid),eq(pantryTrackerTable.quantity,body.quantity)))

   if(alreadyItem.length > 0){
    const updatedData = {
      userid :body.userid,
      items:body.items,
      itemid:body.itemid,
      quantity:body.quantity as number + 1
    }

    await db.update(pantryTrackerTable).set(updatedData).where(and(eq(pantryTrackerTable.userid,body.userid),eq(pantryTrackerTable.itemid,body.itemid),eq(pantryTrackerTable.quantity,body.quantity)));
   }

   else {      
    const Data = await db.insert(pantryTrackerTable).values(body).returning();
        return NextResponse.json(Data) 
    } 
}




export async function PUT(req: NextRequest) {
  const body = await req.json();
  const payload = {
    userid: body.userid,
    items: body.items,
    itemid:body.itemid,
    quantity: body.quantity
  };
  
  const data = await db.update(pantryTrackerTable)
    .set(payload)
    .where(and(eq(pantryTrackerTable.userid, body.userid), eq(pantryTrackerTable.itemid,body.itemid)))
    ;

   

  console.log("Successfully done!", data);

  return NextResponse.json(data);
}







export async function DELETE(request: NextRequest) {
  try {
    const url = request.nextUrl.searchParams;
    const userid = url.get('userid');
    const items = url.get('items');
    const quantityStr = url.get('quantity');

    if (!userid || !items || !quantityStr) {
      return NextResponse.json({ message: "Userid, item, or quantity not provided!" }, { status: 400 });
    }

    // Convert quantity to a number
    const quantity = parseInt(quantityStr, 10);
    if (isNaN(quantity)) {
      return NextResponse.json({ message: "Invalid quantity!" }, { status: 400 });
    }

    await db
      .delete(pantryTrackerTable)
      .where(
        and(
          eq(pantryTrackerTable.userid, userid),
          eq(pantryTrackerTable.items, items),
          eq(pantryTrackerTable.quantity, quantity)
        )
      );

    return NextResponse.json({ message: "Item deleted successfully." });
  } catch (error) {
    console.error("Error deleting item:", error);
    return NextResponse.json({ message: "Error deleting item." }, { status: 500 });
  }
}
