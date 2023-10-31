'use client';

import Radio from './Radio';
import Add from '@/icons/Add';
import { RootState } from '@/store';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';

interface $GroupListProps {
  title: string;
  children: ReactNode | ReactNode[];
}

function GroupList({
  title,
  children,
}: $GroupListProps) {
  return (
    <section className="mb-10">
      <div className="mb-3">        
          <span className="ml-2 grow text-caption font-normal text-light-neutral-bodyText">
            {title}
          </span>
      </div>
      {children}
    </section>
  );
}

interface $Props {
  selectedGroupItem: string;
  setSelectedGroupItem: (val: string) => void;
}

export default function TaskSidebar({
  selectedGroupItem,
  setSelectedGroupItem,
}: $Props) {
  const tasks = useSelector((state: RootState) => state.tasks)
  const categories = Object.keys(tasks);

  return (
    <aside className="flex min-w-[231px] flex-col gap-5 bg-light-primary-background px-4 py-6">
          <GroupList
            title={"My Categories"}
          >
            <div className="ml-4">
              {categories.map((item) => (
                <Radio
                  key={item}
                  id={item}
                  value={selectedGroupItem}
                  onChange={() =>
                    setSelectedGroupItem(item)
                  }
                  isChecked={
                    item === selectedGroupItem
                  }
                >
                  <span className="ml-2 grow text-body font-normal text-light-neutral-bodyText">
                    {item}
                  </span>
                </Radio>
              ))}
              <button
                type="button"
                
                className="ml-0 mt-2 flex items-center gap-1"
              >
                <Add />
                <span className="text-body2 font-normal text-light-primary-progress">
                  New Category
                </span>
              </button>
            </div>
          </GroupList>
        
    </aside>
  );
}
