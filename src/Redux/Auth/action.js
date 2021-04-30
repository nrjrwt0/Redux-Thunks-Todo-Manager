import { loadData } from '../../Utils/localStorage';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  LOGOUT_SUCCESS,
} from './actionTypes';

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

// export const loginCall = ({ email, password }) => (dispatch) => {
//   dispatch(loginRequest());
//   const userData = loadData('userData');
//   const currentUser = userData?.filter(
//     (data) => data.email === email && data.password === password
//   );
//   if (!currentUser || currentUser.length === 0) {
//     dispatch(loginFailure());
//   } else {
//     dispatch(loginSuccess(currentUser[0]));
//   }
// };

export const signUpRequest = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};

export const signUpSuccess = (payload) => {
  return {
    type: SIGNUP_SUCCESS,
    payload,
  };
};

export const signUpFailure = () => {
  return {
    type: SIGNUP_FAILURE,
  };
};

// export const signUpCall = (payload) => (dispatch) => {
//   dispatch(signUpRequest());
//   let userData = loadData('userData');
//   if (!userData) {
//     userData = [];
//   }
//   userData.push(payload);
//   dispatch(signUpSuccess(userData));
// };

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
