'use client';

import { CategoryType } from "@/types";
import { Button } from "@mui/material";

interface $Props {
  selectedGroupItem: CategoryType;
}

export default function TaskHeader({
  selectedGroupItem,
}: $Props) {

  return (
    <header className="my-8 flex h-12 w-full items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="text-h5 font-bold text-light-neutral-titleText">
          {selectedGroupItem.title}
        </h1>
        {selectedGroupItem.id !== '0' && <Button variant="contained">
          Add Task
        </Button>}
      </div>
    </header>
  );
}
