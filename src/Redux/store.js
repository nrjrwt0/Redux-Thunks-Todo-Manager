import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createTodoReducer } from './CreateTodo/reducer';
import { todoReducer } from './Todos/reducer';

const rootReducer = combineReducers({
  createTodo: createTodoReducer,
  todo: todoReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
