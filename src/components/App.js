
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {

  const [todos, setTodos] = useState([
    {id: 1, text: "Learn React", completed: false},
    {id: 2, text: "Build a project", completed: false},
    {id: 3, text: "Apply for jobs", completed: false},
  ]);

  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div>
        <h1> Todo List </h1>
        <TodoList todos={todos} onComplete={handleComplete} />
    </div>
  )
}

export default App
