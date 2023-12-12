import { getTodos } from "../todosReducer";

export const fetchTodos = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => dispatch(getTodos(todos)))
    }
}