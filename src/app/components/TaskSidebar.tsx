'use client';

import Add from '@/icons/Add';
import { RootState } from '@/store';
import { ReactNode, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Trash from '@/icons/Trash';
import { CategoryType } from '@/types';
import { setTask } from '@/store/reducers/taskReducer';
import { useMediaQuery, useTheme } from '@mui/material';
import IconButton from './IconButton';
import AddCategory from './AddCategory';
import Radio from './Radio';

interface $GroupListProps {
  title: string;
  children: ReactNode | ReactNode[];
}

function GroupList({ title, children }: $GroupListProps) {
  return (
    <section className="mb-10">
      <div className="mb-3">
        <span className="text-caption ml-2 grow font-normal text-light-neutral-bodyText">
          {title}
        </span>
      </div>
      {children}
    </section>
  );
}

interface $Props {
  selectedGroupItem: CategoryType;
  setSelectedGroupItem: (val: CategoryType) => void;
  openDrawer: boolean;
}

export default function TaskSidebar({
  openDrawer,
  selectedGroupItem,
  setSelectedGroupItem,
}: $Props) {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks);
  const categories = Object.entries(tasks).reduce(
    (a, [key, value]) => [...a, { title: key, id: value.id }],
    [] as unknown[],
  ) as CategoryType[];
  const [openAddCategory, setOpenAddCategory] = useState(false);

  const onRemoveCategory = (categoryId: string) => {
    const newTasks = Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(tasks).filter(([_key, value]) => value.id !== categoryId),
    );
    dispatch(setTask(newTasks));
  };

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));
  let mobileClassName = '';
  if (!isLargeScreen) {
    mobileClassName = openDrawer ? 'absolute h-full z-10' : 'hidden';
  } else {
    mobileClassName = '';
  }

  return (
    <aside
      className={`${mobileClassName} flex min-w-[231px] flex-col gap-5 bg-light-primary-background py-6 pl-8 pr-4`}
    >
      <GroupList title="My Categories">
        <div className="ml-1">
          {categories.map(({ title, id }: CategoryType) => (
            <div className="flex gap-1" key={id}>
              <Radio
                id={id}
                value={selectedGroupItem.id}
                onChange={() => setSelectedGroupItem({ title, id })}
                isChecked={id === selectedGroupItem.id}
              >
                <span className="text-body ml-2 grow font-normal text-light-neutral-bodyText">
                  {title}
                </span>
              </Radio>
              <IconButton
                onClick={() => onRemoveCategory(id)}
                icon={<Trash size="15" />}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => setOpenAddCategory(true)}
            className="ml-0 mt-2 flex items-center gap-1"
          >
            <Add />
            <span className="text-body2 font-normal text-light-primary-progress">
              New Category
            </span>
          </button>
        </div>
      </GroupList>
      <AddCategory
        isOpen={openAddCategory}
        closeModal={() => setOpenAddCategory(false)}
      />
    </aside>
  );
}
