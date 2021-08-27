import React from "react";
//Import Components

import Todo from "./Todo";
const ToDoList = ({todos, setTodos, filteredTodos}) => {

    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo setTodos={setTodos} todos={todos} key={todo.id} text={todo.text} id={todo.id} todo={todo}  />
                ))}
            </ul>     
        </div>
    );
};

export default ToDoList;