import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ marginBottom: "10px" }}>
          <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.text}
          </span>
          {!todo.completed && (
            <button
              onClick={() => handleComplete(todo.id)}
              data-testid={`complete-button-${todo.id}`} // Cypress can target this
              style={{
                marginLeft: "10px",
                padding: "5px",
                cursor: "pointer",
              }}
            >
              Complete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
