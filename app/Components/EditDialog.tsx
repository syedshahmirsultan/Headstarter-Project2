"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { editItem } from "../utils/apiCalling";

function EditDialog({ user, item, quantity }: { user: KindeUser | null; item: string; quantity: number }) {
  const [itemName, setItemName] = useState(item);
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const router = useRouter();

  const handleEditItem: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
      await editItem(user?.id, itemName, itemQuantity);
      setItemName("");
      setItemQuantity(1);
      router.refresh(); 
    
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <FiEdit color="blue" className="cursor-pointer mt-2 md:mt-0 text-xl md:text-[27px]" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-700">Edit Task</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleEditItem} className="grid gap-4 py-4">
          <div className="flex gap-x-2 md:gap-x-4 mt-4">
            <label htmlFor="name" className="text-gray-950 text-md md:text-lg font-semibold whitespace-nowrap">
              Item Name:
            </label>
            <input
              id="name"
              placeholder="Item Name ..."
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
              className="outline-gray-950 w-[215px] md:w-[260px] h-8 text-center border border-gray-950 rounded-md"
            />
          </div>
          <div className="flex gap-x-2 md:gap-x-4 mt-4">
            <label htmlFor="quantity" className="ml-0 md:ml-3 text-gray-950 text-md md:text-lg whitespace-nowrap font-semibold">
              Quantity:
            </label>
            <input
              id="quantity"
              type="number"
              value={itemQuantity}
              onChange={(e) => setItemQuantity(Number(e.target.value))}
              placeholder="123"
              className="outline-gray-950 w-[215px] md:w-[260px] h-8 text-center border border-gray-950 rounded-md"
              required
            />
          </div>
          <DialogFooter>
            <button
              type="submit"
              className="self-center flex items-center justify-center bg-blue-700 hover:bg-blue-600 text-white text-md font-medium h-10 w-32 rounded-md"
            >
              Submit
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditDialog;
