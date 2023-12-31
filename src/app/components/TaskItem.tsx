import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import Timer from '@/icons/Timer';
import { ReactNode } from 'react';
import Trash from '@/icons/Trash';
import { CategoryType, TaskItem as TaskItemType } from '@/types';
import { setTask } from '@/store/reducers/taskReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import IconButton from './IconButton';
import CopyToClipboardButton from './CopyToClipBoardButton';

interface $Props {
  task: TaskItemType;
  children?: ReactNode | ReactNode[];
  selectedGroupItem: CategoryType;
}

export default function TaskItem({
  task,
  children,
  selectedGroupItem,
}: $Props) {
  const formattedDistance = formatDistanceToNow(new Date(task.dueDate), {
    addSuffix: true,
  });
  const isAlmostDue =
    formattedDistance.includes('1 minute') || formattedDistance.includes('ago');
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks);

  const onDeleteTask = () => {
    const selectedTasks = tasks[selectedGroupItem?.title]?.tasks || [];
    const newTasks = selectedTasks.filter(({ id }) => id !== task.id);
    dispatch(
      setTask({
        ...tasks,
        [selectedGroupItem?.title || '']: {
          id: selectedGroupItem?.id,
          tasks: newTasks,
        },
      }),
    );
  };

  return (
    <li className="flex w-full gap-8 rounded-[4px] bg-light-neutral-dividers p-4">
      {children}
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full justify-between">
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <span className="text-h6 font-semibold text-light-neutral-bodyText">
              {task.title}
            </span>
            <CopyToClipboardButton textToCopy={task.title} />
          </div>
          <IconButton icon={<Trash />} onClick={onDeleteTask} />
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
              {formattedDistance}
            </span>
          </span>
        </div>
      </div>
    </li>
  );
}
