import axios from 'axios';
import {
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  CHANGE_PROGRESS_FAILURE,
  CHANGE_PROGRESS_REQUEST,
  CHANGE_PROGRESS_SUCCESS,
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
} from './actionTypes';

export const getTodoRequest = () => {
  return {
    type: GET_TODO_REQUEST,
  };
};

export const getTodoSuccess = (category, data) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: {
      category,
      data,
    },
  };
};

export const getTodoFailure = () => {
  return {
    type: GET_TODO_FAILURE,
  };
};

export const getTodo = (label) => (dispatch) => {
  const category =
    label === 'Todo' ? 'todos' : label === 'InProgress' ? 'inProgress' : 'done';
  dispatch(getTodoRequest());
  axios
    .get(
      `https://json-server-mocker-neeraj-data.herokuapp.com/todoManager?progress=${label}`
    )
    .then((res) => {
      dispatch(getTodoSuccess(category, res.data));
    })
    .catch(() => {
      dispatch(getTodoFailure());
    });
};

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

export const addTodo = (payload) => (dispatch) => {
  dispatch(addTodoRequest());
  axios
    .post(
      'https://json-server-mocker-neeraj-data.herokuapp.com/todoManager',
      payload
    )
    .then((res) => {
      dispatch(addTodoSuccess());
    })
    .catch(() => {
      dispatch(addTodoFailure());
    });
};

export const changeProgressRequest = () => {
  return {
    type: CHANGE_PROGRESS_REQUEST,
  };
};

export const changeProgressSuccess = () => {
  return {
    type: CHANGE_PROGRESS_SUCCESS,
  };
};

export const changeProgressFailure = () => {
  return {
    type: CHANGE_PROGRESS_FAILURE,
  };
};

export const changeProgress = (todoId, updatedProgress) => (dispatch) => {
  dispatch(changeProgressRequest());
  axios
    .patch(
      `https://json-server-mocker-neeraj-data.herokuapp.com/todoManager/${todoId}`,
      {
        progress: updatedProgress,
      }
    )
    .then((res) => {
      dispatch(changeProgressSuccess());
    })
    .catch(() => {
      dispatch(changeProgressFailure());
    });
};
