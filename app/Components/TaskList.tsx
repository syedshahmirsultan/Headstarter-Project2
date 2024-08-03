// import { FaRegTrashAlt } from "react-icons/fa";
// import { FiEdit } from "react-icons/fi";

// const data= [
// { item:"item 1",
// quantity:"1",

// },
// { item:"item 2",
// quantity:"1",

// },
// { item:"item 3",
// quantity:"1",

// },


// ]



// function TaskList(){
//     return (
//         <div className="mt-2 mx-auto w-[400px] md:w-[700px]">
//         <table className="w-full ">
//         <thead className="bg-gray-100 p-2 rounded-md ">
//             <tr className="text-2xl font-bold text-gray-950">
//                 <th>Items</th>
//                 <th>Quantity</th>
//                 <th>Actions</th>
//             </tr>
//         </thead>
//         <tbody className="w-full h-auto mt-4">
//  {data.map((item,index) => {
//     return ( <tr key={index} className=" w-full h-12 border-b-2 border-sky-100 flex-col   text-xl text-gray-950 font-medium">
//         <td>{item.item}</td>
//         <td>{item.quantity}</td>
//         <td className="flex self-center gap-x-1">
//         <FiEdit color="blue" size={22} className="flex items-center"/>
//         <FaRegTrashAlt color="red" size={22} />
//         </td>
//     </tr>)
//  })
           
           
//   } </tbody>
//     </table>
//         </div>
//     )
// }

// export default TaskList;



import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const data = [
  { item: "polymorphism ", quantity: "1" },
  { item: "item 2", quantity: "1" },
  { item: "item 3", quantity: "1" },
];

function TaskList() {
  return (
    <div className="mt-2 mx-auto w-[300px] md:w-[700px]">
      <table className="w-full border-collapse">
        <thead className="bg-gray-100 p-2 rounded-md">
          <tr className="text-xl md:text-2xl font-bold text-gray-950">
            <th className="p-1">Items</th>
            <th className="p-1">Quantity</th>
            <th className="p-1">Actions</th>
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
                <FiEdit color="blue" className="  cursor-pointer mt-2 md:mt-0 text-xl md:text-2xl" />
                <FaRegTrashAlt color="red" className=" cursor-pointer mt-2 md:mt-0 text-xl md:text-2xl"/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
