
import { dataType } from "@/types";

export default async function getAllItemsByUserid(userid: string | undefined): Promise<dataType[]> {
  try {
    const res = await fetch(`https://shahmir-pantry-tracker.vercel.app/api/crud/?userid=${userid}`);
    if (!res.ok) {
      throw new Error("Failed to fetch items");
    }
    const data: dataType[] = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return []; 
  }
}


export async function addItem({
  userid,
  items,
  quantity,
  itemid
}: {
  userid: string | undefined;
  items: string
  quantity: number
  itemid: string}) {
    const payload = {
    userid :userid,
    items:items,
    quantity:quantity,
    itemid: itemid
    }
 const res = await fetch(`https://shahmir-pantry-tracker.vercel.app/api/crud/`,{
    method:"POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
 })
 return "Okay"
}


export async function editItem({
  userid,
  items,
  quantity,
  itemid
}: {
  userid: string | undefined;
  items: string
  quantity: number
  itemid: string}) {

  const payload = {
    userid: userid,
    items: items,
    itemid:itemid,
    quantity: quantity
  };
  console.log("Edit Payload:", payload);
  const res = await fetch(`https://shahmir-pantry-tracker.vercel.app/api/crud/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  console.log("Edit Response:", data);
  return data;
}



export async function deleteItem({
  userid,
  items,
  quantity,
  itemid
}: {
  userid: string | undefined;
  items: string
  quantity: number
  itemid: string}){
 const res = await fetch(`https://shahmir-pantry-tracker.vercel.app/api/crud/?userid=${userid}&itemid=${itemid}&items=${items}&quantity=${quantity}`,{
    method: "DELETE"
    
 })
}