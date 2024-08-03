import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import AddDialog from "./Components/AddDialog";
import TaskList from "./Components/TaskList";

export default async function Home() {
  const {getUser} = getKindeServerSession();
  const user = await getUser();
  return (
   <div className="w-full p-2 flex flex-col items-center md:p-0 mt-24 md:mt-32 md:max-w-6xl h-full md:mx-auto">
    <h1 className="text-3xl md:text-5xl text-center font-extrabold text-gray-950 tracking-wide"> Shahmir Pantry Tracker</h1>
    <AddDialog/>
    <TaskList/>

   </div>
  );
}
