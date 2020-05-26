import {
  REQUEST_LOGIN,
  REQUEST_LOGIN_SUCCESS,
  REQUEST_LOGIN_FAILED,
  CHECK_AUTHORIZED,
  CHECK_AUTHORIZED_SUCCESS,
  CHECK_AUTHORIZED_FAILED,
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

export const checkAuthorized = (token) => {
  return {
    type: CHECK_AUTHORIZED,
    payload: {
      token,
    },
  };
};

export const checkAuthorizedSuccess = (token) => {
  return {
    type: CHECK_AUTHORIZED_SUCCESS,
    payload: {
      token,
    },
  };
};

export const checkAuthorizedFailed = (error) => {
  return {
    type: CHECK_AUTHORIZED_FAILED,
    payload: {
      error,
    },
  };
};
