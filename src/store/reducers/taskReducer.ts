import { TaskType } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {} as TaskType;

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTask: (_state, action: PayloadAction<TaskType>) => action.payload
  },
});

export const { setTask } = taskSlice.actions;
export default taskSlice.reducer;
