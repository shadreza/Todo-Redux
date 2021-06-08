import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todosList: []
}

const ToDoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodos: (state , action) => {
            state.todosList.push(action.payload)
        }
    }
});

export const {
    saveTodos
} = ToDoSlice.actions;

export const selectTodosList = state =>state.todos.todosList;

export default ToDoSlice.reducer;