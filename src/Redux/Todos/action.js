import axios from 'axios';
import {
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  CHANGE_PROGRESS_FAILURE,
  CHANGE_PROGRESS_REQUEST,
  CHANGE_PROGRESS_SUCCESS,
  DELETE_SUBTASK_FAILURE,
  DELETE_SUBTASK_REQUEST,
  DELETE_SUBTASK_SUCCESS,
  DELETE_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  Done,
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  InProgress,
  Todo,
  TOGGLE_SUBTASK_FAILURE,
  TOGGLE_SUBTASK_REQUEST,
  TOGGLE_SUBTASK_SUCCESS,
} from './actionTypes';

// GET TODOS
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

// ADD TODOS
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

// DELETE TODOS
export const deleteTodoRequest = () => {
  return {
    type: DELETE_TODO_REQUEST,
  };
};

export const deleteTodoSuccess = () => {
  return {
    type: DELETE_TODO_SUCCESS,
  };
};

export const deleteTodoFailure = () => {
  return {
    type: DELETE_TODO_FAILURE,
  };
};

export const deleteTodo = (id) => (dispatch) => {
  dispatch(deleteTodoRequest());
  axios
    .delete(
      `https://json-server-mocker-neeraj-data.herokuapp.com/todoManager/${id}`
    )
    .then((res) => {
      dispatch(deleteTodoSuccess());
      dispatch(getTodo(Todo));
      dispatch(getTodo(InProgress));
      dispatch(getTodo(Done));
    })
    .catch(() => {
      dispatch(deleteTodoFailure());
    });
};

// CHANGE PROGRESS
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
      dispatch(getTodo(Todo));
      dispatch(getTodo(InProgress));
      dispatch(getTodo(Done));
    })
    .catch(() => {
      dispatch(changeProgressFailure());
    });
};

// DELETE SUBTASK
export const deleteSubtaskRequest = () => {
  return {
    type: DELETE_SUBTASK_REQUEST,
  };
};

export const deleteSubtaskSuccess = () => {
  return {
    type: DELETE_SUBTASK_SUCCESS,
  };
};

export const deleteSubtaskFailure = () => {
  return {
    type: DELETE_SUBTASK_FAILURE,
  };
};

export const deleteSubtask = (id, updatedSubtasks) => (dispatch) => {
  dispatch(deleteSubtaskRequest());
  axios
    .patch(
      `https://json-server-mocker-neeraj-data.herokuapp.com/todoManager/${id}`,
      {
        subtasks: updatedSubtasks,
      }
    )
    .then((res) => {
      dispatch(deleteSubtaskSuccess());
      dispatch(getTodo(Todo));
      dispatch(getTodo(InProgress));
      dispatch(getTodo(Done));
    })
    .catch(() => {
      dispatch(deleteSubtaskFailure());
    });
};

// TOGGLE SUBTASK
export const toggleSubtaskRequest = () => {
  return {
    type: TOGGLE_SUBTASK_REQUEST,
  };
};

export const toggleSubtaskSuccess = () => {
  return {
    type: TOGGLE_SUBTASK_SUCCESS,
  };
};

export const toggleSubtaskFailure = () => {
  return {
    type: TOGGLE_SUBTASK_FAILURE,
  };
};

export const toggleSubtask = (id, updatedSubtasks) => (dispatch) => {
  dispatch(toggleSubtaskRequest());
  axios
    .patch(
      `https://json-server-mocker-neeraj-data.herokuapp.com/todoManager/${id}`,
      {
        subtasks: updatedSubtasks,
      }
    )
    .then((res) => {
      dispatch(toggleSubtaskSuccess());
      dispatch(getTodo(Todo));
      dispatch(getTodo(InProgress));
      dispatch(getTodo(Done));
    })
    .catch(() => {
      dispatch(toggleSubtaskFailure());
    });
};
