import taskList from '@/data/mock/myProjects.tasks';
import { ReactNode } from 'react';
import TaskItem from './TaskItem';

interface $Props {
  title: string;
  tasks: typeof taskList.todo;
  headerIcon?: ReactNode;
}

export default function TaskRow({ title, tasks, headerIcon }: $Props) {
  return (
    <section>
      <div className="flex min-w-[312px] items-center justify-between border-b border-light-neutral-border pb-2">
        <div className="mr-auto flex w-full items-center gap-2">
          <span className="text-body2 font-bold text-light-neutral-titleText">
            {title}
          </span>
          <span className="flex items-center justify-center rounded-full bg-light-primary-background px-2 text-light-primary-progress">
            {tasks.length}
          </span>
        </div>
        {headerIcon}
      </div>
      <ul id="tasklist" className="my-4 flex list-none flex-col space-y-4">
        {tasks.map((task) => (
          <TaskItem task={task} key={task.title} />
        ))}
      </ul>
    </section>
  );
}
