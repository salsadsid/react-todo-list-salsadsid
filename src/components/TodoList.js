import React, { useEffect, useState } from 'react';
import Todo from './Todo';

const TodoList = () => {
    const [todoList, setTodoList] = useState([])

    useEffect(() => {
        fetch('https://desolate-waters-67466.herokuapp.com/todo')
            .then(res => res.json())
            .then(data => setTodoList(data))
    }, [todoList])


    return (
        <div className="todo-container">
            <ul className="todo-list">
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