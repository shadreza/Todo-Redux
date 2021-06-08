import React from 'react';
import './TodoItem.css';
import { Checkbox } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {setCheck} from '../../Features/ToDoSlice';

const TodoItem = ({name , done , id}) => {

    const dispatch = useDispatch();
    const handleCheck = () => {
        dispatch(setCheck(id));
    }

    return (
        <div className='todo-item'>
            <Checkbox
                checked={done}
                color="primary"
                onChange={handleCheck}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <p className={done && 'todoItem--done'}>{name}</p>
        </div>
    );
};

export default TodoItem;