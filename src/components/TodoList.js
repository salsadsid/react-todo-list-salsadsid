import React, { useEffect, useState } from 'react';
import Todo from './Todo';

const TodoList = () => {
    const [todoList, setTodoList] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/todo')
            .then(res => res.json())
            .then(data => setTodoList(data))
    }, [todoList])


    return (
        <div class="todo-container">
            <ul class="todo-list">
                {
                    todoList.map(todo => <Todo
                        key={todo._id}
                        todo={todo}
                        setTodoList={setTodoList}
                        todoList={todoList}
                    ></Todo>)
                }
            </ul>
        </div>

    );
};

export default TodoList;