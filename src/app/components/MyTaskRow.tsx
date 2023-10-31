import { useEffect, useState } from 'react';
import taskMockList from '@/data/mock/myTasks.tasks';
import Checkbox from './Checkbox';
import TaskItem from './TaskItem';

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
      {/* <Divider orientation={'vertical'} /> */}
    </div>
  );
}

interface $Props {
  tasks: typeof taskMockList;
}

export default function TaskRow({ tasks }: $Props) {
  const [taskList, setTaskList] = useState(tasks);
  const noOfCompleted = tasks.reduce((a, c) => a + (c.completed ? 1 : 0), 0);

  useEffect(() => {
    setTaskList(tasks);
  }, [tasks]);

  const onCheck = (check: boolean, idx: number) => {
    setTaskList((taskstate) =>
      taskstate.map((item, itemIdx) => {
        if (itemIdx === idx) {
          return {
            ...item,
            completed: check,
          };
        }
        return item;
      }),
    );
  };

  return (
    <section className="w-full">
      <div className="flex w-full items-center justify-between border-b border-light-neutral-border pb-2">
        <div className="mr-auto flex w-full items-center gap-2">
          <span className="text-body2 font-bold text-light-neutral-titleText">
            To Do
          </span>
          <span className="flex items-center justify-center rounded-full bg-light-primary-background px-2 text-light-primary-progress">
            {tasks.length}
          </span>
        </div>
        <span className="ml-auto text-body2 font-bold text-light-neutral-titleText">
          {noOfCompleted}/{tasks.length}
        </span>
      </div>
      <ul id="tasklist" className="my-4 flex list-none flex-col space-y-4">
        {taskList.map((task, idx) => (
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
