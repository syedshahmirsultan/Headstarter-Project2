
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { FiEdit } from "react-icons/fi";
  
   function AddDialog() {
    return (
      <Dialog>
        <DialogTrigger asChild>
        <FiEdit color="blue" className="  cursor-pointer mt-2 md:mt-0 text-xl md:text-[27px]" />    
            </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-blue-700">Edit Task</DialogTitle>
          
          </DialogHeader>
          <form className="grid gap-4 py-4">
            <div className="flex gap-x-2 md:gap-x-4 mt-4">
              <label htmlFor="name" className="text-gray-950 text-md md:text-lg font-semibold whitespace-nowrap">
   ItemName :
              </label>
              <input
                placeholder={'Item Name ...'}
                required
                className="outline-gray-950 w-[215px] md:w-[260px] h-8 text-center border border-gray-950 rounded-md"
              />
            </div>
            <div className="flex gap-x-2 md:gap-x-4 mt-4">
              <label className="ml-0 md:ml-3 text-gray-950 text-md md:text-lg whitespace-nowrap font-semibold">
                Quantity  :
              </label>
              <input
                type="number"
                defaultValue={1}
                placeholder="123"
                className="outline-gray-950 w-[215px] md:w-[260px] h-8 text-center border border-gray-950 rounded-md"
                required
                
              />
            </div>
          </form>
          <DialogFooter>
            <button type="submit" className="self-center flex items-center justify-center bg-blue-700 hover:bg-blue-600 text-white text-md font-medium h-10 w-32  rounded-md">Submit</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }
  
  
  export default AddDialog;