import React from 'react';

function TodoItem({ todo, onComplete }) {
  return (
    <li onClick={() => onComplete(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
    </li>
  );
}

export default TodoItem;
