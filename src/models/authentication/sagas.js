import { takeEvery, put, call } from 'redux-saga/effects';
import { requestLogin } from './api';
import { REQUEST_LOGIN } from '../../constants/actions';
import { requestLoginSuccess, requestLoginFailed } from './actions';

export const requestLoginTask = function* () {
  try {
    const { status, data } = yield call(requestLogin);
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

const watchLoginSagas = function* () {
  yield takeEvery(REQUEST_LOGIN, requestLoginTask);
};

export default watchLoginSagas;
