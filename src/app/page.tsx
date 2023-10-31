'use client';

import TaskHeader from '@/app/components/TaskHeader';
import TaskSidebar from '@/app/components/TaskSidebar';
import MyTaskRow from '@/app/components/MyTaskRow';
import myTasks from '@/data/mock/myTasks.tasks';
import { useEffect, useState } from 'react';
import { RootState } from '@/store';
import { CategoryType, TaskType } from '@/types';
import { useSelector } from 'react-redux';

function Tasks() {
  const tasks = useSelector((state: RootState) => state.tasks) as TaskType
  const categories = Object.entries(tasks)
    .reduce((a, [key, value]) => [{ title: key, id: value.id }, ...a], [] as unknown[]) as CategoryType[];
  const initCategory = categories[0] || {title: 'Please first add a category to add tasks', id: '0'};

  const [selectedGroupItem, setSelectedGroupItem] = useState<CategoryType>(initCategory);

  const isCategoryStillExist = categories.some((category) => category.title === selectedGroupItem.title)

  useEffect(() => {
    if (!selectedGroupItem || !isCategoryStillExist) {
      setSelectedGroupItem(initCategory)
    }
  }, [categories, initCategory])

  return (
    <div className="flex h-screen grow flex-col">
      <div className="flex min-h-[130px] items-center border-b border-light-neutral-border p-8 text-4xl font-extrabold shadow-sm">
        Task Manager
      </div>
      <section className="flex h-full">
        <TaskSidebar
          selectedGroupItem={selectedGroupItem}
          setSelectedGroupItem={setSelectedGroupItem}
        />
        <div className="flex w-full flex-col px-8">
          <TaskHeader
            selectedGroupItem={selectedGroupItem}
          />
          <section
            className={`flex h-[calc(100vh-250px)] gap-8 overflow-y-auto`}
          >
            <MyTaskRow tasks={myTasks} />
          </section>
        </div>
      </section>
    </div>
  );
}

export default Tasks;
