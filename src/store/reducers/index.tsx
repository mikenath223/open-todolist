import { combineReducers } from '@reduxjs/toolkit';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  tasks: taskReducer
});

export default rootReducer;
