import { loadData, saveData } from '../../Utils/localStorage';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from './actionTypes';

const isUserAuth = loadData('isUserAuth');
const userName = loadData('userName');
const userEmail = loadData('userEmail');

const initState = {
  isUserAuth: isUserAuth || false,
  userName: userName || '',
  userEmail: userEmail || '',
  isLoading: false,
  isError: false,
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGIN_SUCCESS: {
      console.log(payload);
      saveData('isUserAuth', true);
      saveData('userName', payload.name);
      saveData('userEmail', payload.email);
      return {
        ...state,
        isUserAuth: true,
        userName: payload.name,
        userEmail: payload.email,
        isLoading: false,
        isError: false,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case SIGNUP_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SIGNUP_SUCCESS: {
      saveData('userData', payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case SIGNUP_FAILURE: {
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
