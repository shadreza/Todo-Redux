import React from 'react';
import './TodoItem.css';
import { Checkbox } from '@material-ui/core';

const TodoItem = ({name , done , id}) => {

    const handleCheck = () => {

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