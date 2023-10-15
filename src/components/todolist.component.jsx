import React from 'react';
import TodoItem from './todoitem.component';

function TodoList({ todos, onComplete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onComplete={onComplete} />
      ))}
    </ul>
  );
}

export default TodoList;
