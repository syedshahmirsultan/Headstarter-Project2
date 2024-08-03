import { getKindeServerSession, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import AddDialog from "../Components/AddDialog";
import TaskList from "../Components/TaskList";
import  Link  from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import getAllItemsByUserid from "../utils/apiCalling";
import { dataType } from "@/types";


export default async function Pantry() {
  const {getUser} = getKindeServerSession();
  const user:KindeUser|null = await getUser();
  const itemData:Array<dataType> = await getAllItemsByUserid(user?.id);
  return (
    <div className="w-full">
    { user ?  (
    <LogoutLink className="bg-black hover:bg-gray-700 fixed right-2 md:right-10 top-2 md:top-10 text-md font-semibold text-white h-12 w-24 flex justify-center items-center  border border-white rounded-md">Log out</LogoutLink>
     ):(
        <Link href="/"  className="bg-blue-700 hover:bg-blue-500 fixed right-2 md:right-10 top-2 md:top-10 text-md font-semibold text-white h-12 w-24 flex justify-center items-center  border border-white rounded-md"> <IoIosArrowBack size={18} color={'white'} className="mr-2"/> Home</Link>
)} <div className="w-full p-2 flex flex-col items-center md:p-0 mt-20 md:mt-24 md:max-w-6xl h-full md:mx-auto">
    <h1 className="text-3xl md:text-5xl text-center font-extrabold text-gray-950 tracking-wide"> Shahmir Pantry Tracker</h1>
    <AddDialog user={user}/>
    <TaskList user={user} itemData={itemData}/>
   </div></div>
  );
}