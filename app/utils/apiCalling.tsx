
import { dataType } from "@/types";

export default async function getAllItemsByUserid(userid: string | undefined): Promise<dataType[]> {
  try {
    const res = await fetch(`http://localhost:3000/api/crud/?userid=${userid}`);
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


export async function addItem(userid:string|undefined,item:string,quantity:number){
    const payload = {
    userid :userid,
    items:item,
    quantity:quantity
    }
 const res = await fetch(`http://localhost:3000/api/crud/`,{
    method:"POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
 })
 return "Okay"
}


export async function editItem(userid:string|undefined,item:string,quantity:number){
  const payload = {
      userid:userid,
      items:item,
     quantity:quantity
  }
const res = await fetch(`http://localhost:3000/api/crud/`,{
    method:"PUT",
    headers:{
    "Content-Type": "application/json"
    },
    body:JSON.stringify(payload)
})

return "Okay !"
}


export async function deleteItem(userid:string|undefined,item:string,quantity:number){
 const res = await fetch(`http://localhost:3000/api/crud/?userid=${userid}&item=${item}&quantity=${quantity}`,{
    method: "DELETE"
    
 })
}