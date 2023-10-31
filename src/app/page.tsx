'use client';

import TaskHeader from '@/app/components/TaskHeader';
import TaskSidebar from '@/app/components/TaskSidebar';
import MyTaskRow from '@/app/components/MyTaskRow';
import myTasks from '@/data/mock/myTasks.tasks';
import { useState } from 'react';

function Tasks() {
  const [selectedGroupItem, setSelectedGroupItem] = useState<string>('');

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
