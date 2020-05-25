import { takeLatest, put, call } from 'redux-saga/effects';
import { requestLogin, authorized } from './api';
import { REQUEST_LOGIN, CHECK_AUTHORIZED } from '../../constants/actions';
import {
  requestLoginSuccess,
  requestLoginFailed,
  checkAuthorizedSuccess,
  checkAuthorizedFailed,
} from './actions';

export const requestLoginTask = function* ({ payload }) {
  try {
    const { username, password } = payload;
    const { status, data } = yield call(requestLogin, username, password);
    if (status !== 200) {
      const error = {
        errorCode: status,
        errorMsg: data.Error,
      };
      return yield put(requestLoginFailed(error));
    }
    return yield put(requestLoginSuccess(data.token));
  } catch (error) {
    return yield put(
      requestLoginFailed({
        errorCode: 500,
        errorMsg: error.message,
      }),
    );
  }
};

export const checkAuthorized = function* ({ payload }) {
  try {
    const { token } = payload;
    const { status } = yield call(authorized, token);
    const isValid = status === 200;
    return yield put(checkAuthorizedSuccess(isValid ? token : null));
  } catch (error) {
    return yield put(
      checkAuthorizedFailed({
        errorCode: 500,
        errorMsg: error.message,
      }),
    );
  }
};

const watchLoginSagas = function* () {
  yield takeLatest(REQUEST_LOGIN, requestLoginTask);
  yield takeLatest(CHECK_AUTHORIZED, checkAuthorized);
};

export default watchLoginSagas;
