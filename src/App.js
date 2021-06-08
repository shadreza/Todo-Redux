import React from 'react';
import './App.css';
import Input from './Components/Input/Input';
import TodoItem from './Components/TodoItem/TodoItem';
import {useSelector} from 'react-redux';
import {selectTodosList} from './Features/ToDoSlice';

function App() {
  const todoList = useSelector(selectTodosList);
  return (
    <div className="App">
      <div className="app__container">
        <div className="app__todo__container">
          {
            todoList.map((todo=>(
              <TodoItem
                name={todo.item}
                done={todo.done}
                id={todo.id}
              />
            )))
          }
        </div>
        <Input></Input>
      </div>
    </div>
  );
}

export default App;
