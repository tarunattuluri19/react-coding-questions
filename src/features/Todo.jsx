import React, { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  return (
    <div className="container">
      <h2>Todo List</h2>
      
      <form onSubmit={handleAddTodo} className="form-group">
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add new todo"
        />
        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li 
            key={todo.id}
            style={{
              padding: '10px',
              margin: '5px 0',
              backgroundColor: 'white',
              borderRadius: '4px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo