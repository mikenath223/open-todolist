import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import IconButton from './IconButton';
import Timer from '@/icons/Timer';
import { ReactNode } from 'react';
import Trash from '@/icons/Trash';
import { TaskItem } from '@/types';

interface $Props {
  task: TaskItem;
  children?: ReactNode | ReactNode[];
}

export default function TaskItem({ task, children }: $Props) {
  const formattedDistance = formatDistanceToNow(task.dueDate);
  const isAlmostDue = formattedDistance.includes('1 minute');

  return (
    <li className="flex w-full gap-8 rounded-[4px] bg-light-neutral-dividers p-4">
      {children}
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full justify-between">
          <span className="text-h6 font-semibold text-light-neutral-bodyText">
            {task.title}
          </span>
          <IconButton icon={<Trash />} />
        </div>
        <span className="text-body font-normal text-light-neutral-bodyText">
          {task.details}
        </span>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1">
            <Timer color={isAlmostDue ? '#D30C53' : '#333537'} />
            <span
              className={`text-caption font-bold ${
                isAlmostDue
                  ? 'text-light-error-default'
                  : 'text-light-neutral-titleText'
              }`}
            >
              {formattedDistance} left
            </span>
          </span>
        </div>
      </div>
    </li>
  );
}
