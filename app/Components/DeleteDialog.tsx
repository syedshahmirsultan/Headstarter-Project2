"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaRegTrashAlt } from "react-icons/fa";
import { FormEventHandler } from "react";
import { deleteItem } from "../utils/apiCalling";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { useRouter } from "next/navigation";

function DeleteDialog({ user, item, quantity, itemid }: { user: KindeUser | null; item: string; quantity: number; itemid: string }) {
  const router = useRouter();
  
  const handleDelete: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await deleteItem({
      userid: user?.id,
      items: item,
      quantity: quantity,
      itemid: itemid
    });
    router.refresh();
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <FaRegTrashAlt color="red" className="cursor-pointer mt-2 md:mt-0 text-xl md:text-[27px]" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-red-600 text-2xl font-semibold">Delete Task</DialogTitle>
          <DialogDescription className="text-lg text-gray-950 font-medium">
            Are you sure you want to delete this task?
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleDelete}>
          <DialogFooter className="sm:justify-start">
            <button 
              type="submit"  
              className="px-4 py-2 rounded-md self-end bg-red-600 text-center flex justify-center items-center text-white font-semibold text-md hover:bg-red-500"
            >
              Yes
            </button>
           
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteDialog;
