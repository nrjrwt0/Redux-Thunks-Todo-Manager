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
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  TOGGLE_SUBTASK_FAILURE,
  TOGGLE_SUBTASK_REQUEST,
  TOGGLE_SUBTASK_SUCCESS,
} from './actionTypes';

const initState = {
  todos: [],
  inProgress: [],
  done: [],
  isLoading: false,
  isError: false,
};

export const todoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        [payload.category]: payload.data,
      };
    }
    case GET_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case ADD_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case ADD_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case ADD_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case CHANGE_PROGRESS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case CHANGE_PROGRESS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case CHANGE_PROGRESS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case DELETE_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case DELETE_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case DELETE_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case DELETE_SUBTASK_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case DELETE_SUBTASK_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case DELETE_SUBTASK_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case TOGGLE_SUBTASK_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case TOGGLE_SUBTASK_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case TOGGLE_SUBTASK_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
