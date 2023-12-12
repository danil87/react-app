import { configureStore, Tuple } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import todosReducer from './todosReducer';


const rootReducer = combineReducers({
    todos: todosReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: () => new Tuple(thunk) 
})