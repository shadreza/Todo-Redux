import React , {useState} from 'react';
import './Input.css';

import {useDispatch} from 'react-redux';
import {saveTodos} from '../../Features/ToDoSlice'

const Input = () => {

    const [input , setInput] = useState('');
    const dispatch = useDispatch()

    const addToToDo = () => {
        if(input.length === 0) {
            return;
        }
        dispatch(saveTodos({
            item : input,
            done : false,
            id   : Date.now()
        }))
        setInput('');
    }

    return (
        <div className="input-main-div">
            <input id="input-text" type="text" value={input} onChange={e=>setInput(e.target.value)}/>
            <button onClick={addToToDo}>Add</button>
        </div>
    );
};

export default Input;