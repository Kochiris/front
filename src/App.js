
import './App.css';
import React from 'react';


import TodosContainer from './app/todos/components/TodosContainer';
import TodoForm from './app/todos/components/TodoForm'







function App() {






  return (
    <div className="todo-app">
      <h1>ToDo List:</h1>
      <TodoForm />
      <TodosContainer />
    </div>
  );
}

export default App;
