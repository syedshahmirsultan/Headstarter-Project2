import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ReactNode } from "react"

 function AddDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <button className="mt-8 md:mt-16 h-12 w-[300px] p-2 md:m-0 md:w-[850px] rounded-md bg-blue-700 text-white font-semibold text-md md:text-xl hover:bg-blue-600">
        Add New Item
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-700">Add New Task</DialogTitle>
        
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