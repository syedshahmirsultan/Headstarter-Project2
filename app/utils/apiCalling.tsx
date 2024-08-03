

export default async function getAllItemsByUserid(userid:string|undefined){
const res = await fetch(`http://localhost:3000/api/crud?userid=${userid}`,{
    cache:"no-store"
})

if(!res.ok){
    return "Error"
}

res.json();
}

export async function addItem(userid:string|undefined,item:string,quantity:number){
    const payload = {
    userid :userid,
    item:item,
    quantity:quantity
    }
 const res = await fetch(`http://localhost:3000/api/crud`,{
    method:"POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
 })
 return "Okay"
}


export async function editItem(userid:string|undefined,item:string,quantity:number){
const res = await fetch(`http://localhost:3000/api/crud`,{
    method:"PUT",
    headers:{
    "Content-Type": "application/json"
    },
    body:JSON.stringify({
        userid:userid,
        item:item,
       quantity:quantity
    })
})

return "Okay"
}


export async function deleteItem(userid:string|undefined,item:string,quantity:number){
 const res = await fetch(`http://localhost:3000/api/crud?userid=${userid}&item=${item}&quantity=${quantity}`,{
    method: "DELETE"
 })
}