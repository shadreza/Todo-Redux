import React , {useState} from 'react';
import './Input.css';

const Input = () => {

    const [input , setInput] = useState('');

    const addToToDo = () => {
        console.log('object')
    }

    return (
        <div className="input-main-div">
            <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
            <button onClick={addToToDo}>Add</button>
        </div>
    );
};

export default Input;