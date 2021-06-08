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
        },
        setCheck: (state, action) => {
            state.todosList.map(item =>{
                if(action.payload == item.id) {
                    if(item.done === true) {
                        item.done = false
                    }
                    else {
                        item.done = true
                    }
                }
            })
        }
    }
});

export const {
    saveTodos,
    setCheck
} = ToDoSlice.actions;

export const selectTodosList = state =>state.todos.todosList;

export default ToDoSlice.reducer;