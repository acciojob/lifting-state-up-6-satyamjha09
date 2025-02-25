import React from "react";

const TodoList = ({ todos, onComplete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} data-cy={`todo-item-${todo.id}`}>
          {todo.text} {todo.completed ? "✅ Done" : ""}
          {!todo.completed && (
            <button data-cy={`complete-btn-${todo.id}`} onClick={() => onComplete(todo.id)}>
              Complete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
