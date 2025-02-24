"use client";
import { v4 as uuidv4 } from 'uuid';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { addItem } from "../utils/apiCalling";

function AddDialog({ user }: { user: KindeUser | null }) {
  const [newTask, setNewTask] = useState("");
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const handleAddItem: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addItem({
      userid :user?.id,
      items: newTask,
      quantity: quantity,
    itemid:uuidv4()});
    
    setNewTask("");
    setQuantity(1);
    router.refresh();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="mt-8 md:mt-16 h-12 w-[330px] p-2 md:m-0 md:w-[850px] rounded-md bg-blue-700 text-white font-semibold text-md md:text-xl hover:bg-blue-600">
          Add New Item
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-700">
            Add New Task
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleAddItem} className="grid gap-4 py-4">
          <div className="flex gap-x-2 md:gap-x-4 mt-4">
            <label
              htmlFor="name"
              className="text-gray-950 text-md md:text-lg font-semibold whitespace-nowrap"
            >
              ItemName :
            </label>
            <input
              placeholder={"Item Name ..."}
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              required
              className="outline-gray-950 w-[215px] md:w-[260px] h-8 text-center border border-gray-950 rounded-md"
            />
          </div>
          <div className="flex gap-x-2 md:gap-x-4 mt-4">
            <label className="ml-0 md:ml-3 text-gray-950 text-md md:text-lg whitespace-nowrap font-semibold">
              Quantity :
            </label>
            <input
              type="number"
              defaultValue={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
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

export default AddDialog;
