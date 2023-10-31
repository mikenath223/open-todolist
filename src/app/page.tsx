'use client';

import TaskHeader from '@/app/components/TaskHeader';
import TaskSidebar from '@/app/components/TaskSidebar';
import MyTaskRow from '@/app/components/MyTaskRow';
import { useEffect, useMemo, useState } from 'react';
import { RootState } from '@/store';
import { CategoryType } from '@/types';
import { useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

function Tasks() {
  const tasks = useSelector((state: RootState) => state.tasks);
  const categories = Object.entries(tasks).reduce(
    (a, [key, value]) => [...a, { title: key, id: value.id }],
    [] as unknown[],
  ) as CategoryType[];
  const initCategory = useMemo(
    () =>
      categories[0] || {
        title: 'Please first add a category to add tasks',
        id: '0',
      },
    [categories],
  );

  const [selectedGroupItem, setSelectedGroupItem] =
    useState<CategoryType>(initCategory);
  const [openDrawer, setOpenDrawer] = useState(false);

  const isCategoryStillExist = categories.some(
    (category) => category.title === selectedGroupItem.title,
  );

  useEffect(() => {
    if (!selectedGroupItem || !isCategoryStillExist) {
      setSelectedGroupItem(initCategory);
    }
  }, [categories, initCategory, isCategoryStillExist, selectedGroupItem]);

  return (
    <div className="flex h-screen grow flex-col">
      <div className="flex min-h-[130px] items-center border-b border-light-neutral-border p-8 shadow-sm">
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={() => setOpenDrawer(!openDrawer)}
          sx={{
            mr: 2,
            display: { sm: 'none' },
          }}
        >
          <MenuIcon color="primary" />
        </IconButton>
        <span className="text-4xl font-extrabold">Task Manager</span>
      </div>
      <section className="relative flex h-full">
        <TaskSidebar
          openDrawer={openDrawer}
          selectedGroupItem={selectedGroupItem}
          setSelectedGroupItem={setSelectedGroupItem}
        />
        <div className="flex w-full flex-col px-8">
          <TaskHeader selectedGroupItem={selectedGroupItem} />
          <section className="flex h-[calc(100vh-250px)] gap-8 overflow-y-auto">
            <MyTaskRow selectedGroupItem={selectedGroupItem} />
          </section>
        </div>
      </section>
    </div>
  );
}

export default Tasks;
