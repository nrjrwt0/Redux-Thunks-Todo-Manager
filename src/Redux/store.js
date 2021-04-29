import { createStore } from 'redux';
import { createTodoReducer } from './CreateTodo/reducer';

export const store = createStore(createTodoReducer);
