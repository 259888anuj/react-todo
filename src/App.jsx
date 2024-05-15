import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState(["first", "second"]);
  const [inputTodo, setInputTodo] = useState('');
  const [checkedItems, setCheckedItems] = useState(new Array(todo.length).fill(false));

  const handleTodo = () => {
    setTodo(prev => [inputTodo, ...prev]);
    setInputTodo('');
    setCheckedItems(prev => [false, ...prev]);
  };

  const handleChange = (e) => {
    setInputTodo(e.target.value);
  };

  const handleClick = (index) => {
    setCheckedItems(prev => {
      const newCheckedItems = [...prev];
      newCheckedItems[index] = !newCheckedItems[index];
      return newCheckedItems;
    });
  };

  const handleDelete = (index) => {
    setTodo(prev => {
      const newTodo = [...prev];
      newTodo.splice(index, 1);
      return newTodo;
    });
    setCheckedItems(prev => {
      const newCheckedItems = [...prev];
      newCheckedItems.splice(index, 1);
      return newCheckedItems;
    });
  };

  return (
    <div className="container">
      <div className="todo-app">
        <div className='todo-title'>
          <h2>To-Do List</h2>
          <img className='imageto' src="./image/icon.png" />
        </div>
        <div className="row">
          <input value={inputTodo} onChange={(e) => handleChange(e)} type="text" placeholder="enter list" />
          <button onClick={handleTodo}>+</button>
        </div>
        <ul id="list-container">
          {todo.map((value, index) => (
            <li key={index} className={checkedItems[index] ? 'checked' : ''} onClick={() => handleClick(index)}>
              {value}
              <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
