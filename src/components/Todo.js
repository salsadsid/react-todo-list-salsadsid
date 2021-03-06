import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Todo = ({ todo, setTodoList, todoList }) => {
    const handleDelete = id => {
        const url = `https://desolate-waters-67466.herokuapp.com/todo/${id}`;
        const proceed = window.confirm('Are you Sure ?')
        if (proceed) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = todoList.filter(todo => todo._id !== id);
                    setTodoList(remaining);
                })
        }
    }
    const handleCompleted = (id) => {
        toast('Task Completed')
        const data = {
            id: id,
            completed: true,
        }
        fetch(`https://desolate-waters-67466.herokuapp.com/todo`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.matchedCount > 0) {
                    console.log(result)
                }
            })
    }
    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? 'completed' : ""}`}>{todo.name} || <small>{todo.description}</small></li>
            <button className='completed-btn' onClick={() => handleCompleted(todo._id)}>
                <i className='fas fa-check'></i>
            </button>
            <button className='trash-btn' onClick={() => handleDelete(todo._id)}>
                <i className='fas fa-trash'></i>
            </button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Todo;