import React, { useState } from 'react';
import Navigation from './components/navigation.component';
import TodoList from './components/todolist.component';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a project', completed: false },
        { id: 3, text: 'Celebrate', completed: false },
    ]);

    const handleComplete = (todoId) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div>
        <Navigation />

      <h1>Todo List</h1>
        <div className="container mt-4">
       <TodoList todos={todos} onComplete={handleComplete} />
      </div>
    </div>
    );
}

export default App;