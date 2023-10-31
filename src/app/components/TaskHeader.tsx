'use client';

import { CategoryType } from "@/types";
import { Button } from "@mui/material";
import AddTodo from "./AddTodo";
import { useState } from "react";

interface $Props {
  selectedGroupItem: CategoryType;
}

export default function TaskHeader({
  selectedGroupItem,
}: $Props) {
  const [openAddTodo, setOpenAddTodo] = useState(false);

  return (
    <header className="my-8 flex h-12 w-full items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="text-h5 font-bold text-light-neutral-titleText">
          {selectedGroupItem.title}
        </h1>
        {selectedGroupItem.id !== '0' && <Button variant="contained" onClick={() => setOpenAddTodo(true)}>
          Add Task
        </Button>}
      </div>
      <AddTodo selectedGroupItem={selectedGroupItem} isOpen={openAddTodo} closeModal={() => setOpenAddTodo(false)} />
    </header>
  );
}
