import Checkbox from './Checkbox';
import TaskItem from './TaskItem';
import { TaskType } from '@/types';
import { RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryType } from '@/types';
import { setTask } from '@/store/reducers/taskReducer';
import SearchTasks from './SearchTasks';
import { useDeferredValue, useMemo, useState } from 'react';

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

  const [searchQuery, setSearchQuery] = useState('');
  const debouncedQuery = useDeferredValue(searchQuery);

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

  const filteredTasks = useMemo(() => tasksList.filter(({title}) => {
    const regex = new RegExp(debouncedQuery, 'i');
    return regex.test(title)
  }), [debouncedQuery, tasksList])

  const renderedTasks = debouncedQuery !== '' ? filteredTasks : tasksList

  return (
    <section className="w-full">
      <div className="mt-3 flex w-full items-center md:flex-row xs:flex-col border-b border-light-neutral-border pb-2">
        <div className="flex min-w-max items-center gap-2 mr-4">
          <span className="text-body2 font-bold text-light-neutral-titleText">
            To Do
          </span>
          <span className="flex items-center justify-center rounded-full bg-light-primary-background px-2 text-light-primary-progress">
            {tasksList.length}
          </span>
        </div>
        <div className='mr-4 w-full max-w-[300px]'>
        <SearchTasks searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        <span className="ml-auto text-body2 font-bold text-light-neutral-titleText">
          {noOfCompleted}/{tasksList.length}
        </span>
      </div>
      <ul id="tasklist" className="my-4 flex list-none flex-col space-y-4">
        {renderedTasks.map((task, idx) => (
          <TaskItem selectedGroupItem={selectedGroupItem} task={task} key={task.title}>
            <TaskCheckbox
              isCompleted={task.completed}
              onCheck={(check) => onCheck(check, idx)}
            />
          </TaskItem>
        ))}
      </ul>
      {debouncedQuery !== '' && tasksList.length !== 0 && filteredTasks.length === 0 && (
        <span className="text-body2 font-medium text-light-neutral-titleText">
        No todo items matching your search!
      </span>
      )}
    </section>
  );
}
