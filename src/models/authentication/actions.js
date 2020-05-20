import {
  REQUEST_LOGIN,
  REQUEST_LOGIN_SUCCESS,
  REQUEST_LOGIN_FAILED,
} from '../../constants';

export const requestLogin = (username, password) => {
  return {
    type: REQUEST_LOGIN,
    payload: {
      username,
      password,
    },
  };
};

export const requestLoginSuccess = (token) => {
  return {
    type: REQUEST_LOGIN_SUCCESS,
    payload: {
      token,
    },
  };
};

export const requestLoginFailed = (error) => {
  return {
    type: REQUEST_LOGIN_FAILED,
    payload: {
      error,
    },
  };
};
