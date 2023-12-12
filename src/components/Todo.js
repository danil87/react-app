import React from "react";

const Todo = (todo) => {
    return (
        <div>
            <p>{todo.title}</p>
            <p>{todo.completed}</p>
        </div>
    )
}