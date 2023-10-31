import { useEffect, useState } from 'react';
import taskMockList from '@/data/mock/myTasks.tasks';
import Checkbox from './Checkbox';
import TaskItem from './TaskItem';
import { TaskType } from '@/types';
import { RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryType } from '@/types';
import { setTask } from '@/store/reducers/taskReducer';

interface $TaskCheckbox {
  isCompleted: boolean;
  onCheck: (val: boolean) => void;
}

function TaskCheckbox({ isCompleted, onCheck }: $TaskCheckbox) {
  return (
    <div className="ml-4 flex gap-8">
      <Checkbox
        checked={isCompleted}
        onChange={() => onCheck(!isCompleted)}
        label=""
      />
      <span className="border-r-[3px] border-[#DCDDDD]" />
    </div>
  );
}

interface $Props {
  selectedGroupItem: CategoryType;
}

export default function TaskRow({ selectedGroupItem }: $Props) {
  const tasks = useSelector((state: RootState) => state.tasks) as TaskType
  const tasksList = tasks[selectedGroupItem?.title]?.tasks || [];
  const noOfCompleted = tasksList.reduce((a, c) => a + (c.completed ? 1 : 0), 0);
  const dispatch = useDispatch()

  const onCheck = (check: boolean, idx: number) => {
    const newTasks = tasksList.map((item, itemIdx) => {
      if (itemIdx === idx) {
        return {
          ...item,
          completed: check,
        };
      }
      return item;
    })
    dispatch(setTask({
      ...tasks,
      [selectedGroupItem.title]: {
        id: selectedGroupItem.id,
        tasks: newTasks
      }
    }));
  };

  return (
    <section className="w-full">
      <div className="flex w-full items-center justify-between border-b border-light-neutral-border pb-2">
        <div className="mr-auto flex w-full items-center gap-2">
          <span className="text-body2 font-bold text-light-neutral-titleText">
            To Do
          </span>
          <span className="flex items-center justify-center rounded-full bg-light-primary-background px-2 text-light-primary-progress">
            {tasksList.length}
          </span>
        </div>
        <span className="ml-auto text-body2 font-bold text-light-neutral-titleText">
          {noOfCompleted}/{tasksList.length}
        </span>
      </div>
      <ul id="tasklist" className="my-4 flex list-none flex-col space-y-4">
        {tasksList.map((task, idx) => (
          <TaskItem task={task} key={task.title}>
            <TaskCheckbox
              isCompleted={task.completed}
              onCheck={(check) => onCheck(check, idx)}
            />
          </TaskItem>
        ))}
      </ul>
    </section>
  );
}
