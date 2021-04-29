import {
  ADD_DATE,
  ADD_DESCRIPTION,
  ADD_PROGRESS,
  ADD_TAGS,
  ADD_TITLE,
} from './actionTypes';

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();
const date = mm + '/' + dd + '/' + yyyy;

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
    case ADD_TAGS: {
      return {
        ...state,
        subtasks: [payload, ...state.subtasks],
      };
    }
    default:
      return state;
  }
};
