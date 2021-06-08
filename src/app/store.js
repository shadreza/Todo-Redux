import { configureStore } from '@reduxjs/toolkit';
import TodosReducer from '../Features/ToDoSlice';

export const store = configureStore({
  reducer: {
    todos: TodosReducer
  },
});
