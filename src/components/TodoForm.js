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

        fetch('https://desolate-waters-67466.herokuapp.com/todo', {
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
                <input type="text" className="todo-input-name" placeholder='name' name='name' />
                <input type="text" className="todo-input" placeholder='description' name='description' />
                <button className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
            </form>
            <TodoList></TodoList>
        </div>
    );
};

export default TodoForm;