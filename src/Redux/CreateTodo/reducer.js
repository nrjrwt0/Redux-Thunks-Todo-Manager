import {
  ADD_DATE,
  ADD_DESCRIPTION,
  ADD_PROGRESS,
  ADD_SUBTASK,
  ADD_TAGS,
  ADD_TITLE,
  RESET_FORM,
  UPDATE_SUBTASKS_LIST,
} from './actionTypes';

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();
const date = yyyy + '-' + mm + '-' + dd;

const initState = {
  title: '',
  description: '',
  progress: 'Todo',
  date: date,
  tags: {
    personal: false,
    official: false,
    others: false,
  },
  subtasks: [],
};

export const createTodoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TITLE: {
      return {
        ...state,
        title: payload,
      };
    }
    case ADD_DESCRIPTION: {
      return {
        ...state,
        description: payload,
      };
    }
    case ADD_PROGRESS: {
      return {
        ...state,
        progress: payload,
      };
    }
    case ADD_DATE: {
      return {
        ...state,
        date: payload,
      };
    }
    case ADD_TAGS: {
      return {
        ...state,
        tags: payload,
      };
    }
    case ADD_SUBTASK: {
      return {
        ...state,
        subtasks: [payload, ...state.subtasks],
      };
    }
    case UPDATE_SUBTASKS_LIST: {
      return {
        ...state,
        subtasks: payload,
      };
    }
    case RESET_FORM: {
      return {
        ...initState,
      };
    }
    default:
      return state;
  }
};
