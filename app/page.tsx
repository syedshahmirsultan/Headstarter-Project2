import AddDialog from "./Components/AddDialog";
import TaskList from "./Components/TaskList";

export default function Home() {
  return (
   <div className="w-full p-2 flex flex-col items-center md:p-0 mt-24 md:mt-32 md:max-w-6xl h-full md:mx-auto">
    <h1 className="text-3xl md:text-5xl text-center font-bold text-gray-950 "> Pantry Tracker App</h1>
    <AddDialog/>
    <TaskList/>

   </div>
  );
}
