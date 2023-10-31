'use client';

interface $Props {
  selectedGroupItem: string;
}

export default function TaskHeader({
  selectedGroupItem,
}: $Props) {

  return (
    <header className="my-8 flex h-12 w-full items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="text-h5 font-bold text-light-neutral-titleText">
          {selectedGroupItem}
        </h1>
      </div>
    </header>
  );
}
