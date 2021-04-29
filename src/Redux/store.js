import { compose, createStore } from 'redux';
import { createTodoReducer } from './CreateTodo/reducer';

export const store = createStore(
  createTodoReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
