const defaultState = {
    todos: []
};

const GET_TODOS = 'GET_TODOS';

const todosReducer = (state = defaultState, actioin) => {
    switch(actioin.type){
        case GET_TODOS:
            return { ...state, todos: actioin.payload };
        default:
            return state;
    }
};

export default todosReducer; 


export const getTodos = (todos) => ({type: GET_TODOS, payload: todos});