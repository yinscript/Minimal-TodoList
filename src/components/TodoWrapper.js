import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { EditTodoForm } from './EditTodoForm';
import { Todo } from './Todo';

export const TodoWrapper = () => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [
            { id: 1, task: 'walk doggos 🦮', completed: false, isEditing: false },
            { id: 2, task: 'cook sinigang for lunch 😋', completed: false, isEditing: false },
            { id: 3, task: 'write journal 📝', completed: false, isEditing: false },
        ];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const addTodo = (todo) => {
        setTodos([...todos, { id: Date.now(), task: todo, completed: false, isEditing: false }]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos((prevTodos) => {
            const updatedTodos = prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            );
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            return updatedTodos;
        });
    };

    const editTodo = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, isEditing: true } : todo
            )
        );
    };

    const updateTodo = (task, id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, task, isEditing: false } : todo
            )
        );
    };

    const moveUp = (index) => {
        if (index === 0) return;
        const newTodos = [...todos];
        [newTodos[index - 1], newTodos[index]] = [newTodos[index], newTodos[index - 1]];
        setTodos(newTodos);
    };

    const moveDown = (index) => {
        if (index === todos.length - 1) return;
        const newTodos = [...todos];
        [newTodos[index], newTodos[index + 1]] = [newTodos[index + 1], newTodos[index]];
        setTodos(newTodos);
    };

    return (
        <div className="TodoWrapper">
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm key={todo.id} editTodo={updateTodo} task={todo} />
                ) : (
                    <Todo
                        key={todo.id}
                        task={todo}
                        index={index}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        toggleComplete={toggleComplete}
                        moveUp={moveUp}
                        moveDown={moveDown}
                    />
                )
            ))}
        </div>
    );
};
