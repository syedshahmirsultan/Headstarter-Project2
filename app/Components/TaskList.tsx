import EditDialog from "./EditDialog";
import DeleteDialog from "./DeleteDialog";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const data = [
  { item: "polymorphism ", quantity: "1" },
  { item: "item 2", quantity: "1" },
  { item: "item 3", quantity: "1" },
];

async function TaskList() {

  return (
    <div className="mt-2 mx-auto w-[300px] md:w-[850px]">
      <table className="w-full border-collapse">
        <thead className="bg-gray-100 p-2 ">
          <tr className="text-xl md:text-2xl font-bold text-gray-950">
            <th className="p-2">Items</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody className="w-full h-auto mt-4">
          {data.map((item, index) => (
            <tr
              key={index}
              className="w-full h-12 border-b-2 border-sky-100 text-lg md:text-xl text-gray-950 font-medium"
            >
              <td className="p-1 md:p-3 flex items-center justify-center ">{item.item}</td>
              <td className="p-1 md:p-3 text-center">{item.quantity}</td>
              <td className="p-1 md:p-3 flex items-center justify-center gap-x-2">
               <EditDialog/>
               <DeleteDialog/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
