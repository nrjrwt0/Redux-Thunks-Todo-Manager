import axios from 'axios';
import {
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
} from './actionTypes';

export const addTodoRequest = () => {
  return {
    type: ADD_TODO_REQUEST,
  };
};

export const addTodoSuccess = () => {
  return {
    type: ADD_TODO_SUCCESS,
  };
};

export const addTodoFailure = () => {
  return {
    type: ADD_TODO_FAILURE,
  };
};

export const addTodo = (payload) => {
  axios.post(
    'https://json-server-mocker-neeraj-data.herokuapp.com/todoManager',
    payload
  );
};
