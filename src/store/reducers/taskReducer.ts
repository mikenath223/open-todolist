import { CategoryType, TaskType } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {} as TaskType;

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTask: (_state, action: PayloadAction<TaskType>) => action.payload,
    setCategory: (state, action: PayloadAction<CategoryType>) => ({
      ...state,
      [action.payload.title]: {
        id: action.payload.id,
        tasks: []
      }
    })
  },
});

export const { setTask, setCategory } = taskSlice.actions;
export default taskSlice.reducer;
