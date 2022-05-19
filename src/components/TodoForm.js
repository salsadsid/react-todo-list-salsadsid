import React from 'react';
import TodoList from './TodoList';

const TodoForm = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const data = {
            name: event.target.name.value,
            description: event.target.description.value,
            completed: false
        }

        fetch('http://localhost:5000/todo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div>
            <header>
                <h1>React Todo List</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <input type="text" class="todo-input-name" placeholder='name' name='name' />
                <input type="text" class="todo-input" placeholder='description' name='description' />
                <button class="todo-button" type="submit">
                    <i class="fas fa-plus-square"></i>
                </button>
            </form>
            <TodoList></TodoList>
        </div>
    );
};

export default TodoForm;