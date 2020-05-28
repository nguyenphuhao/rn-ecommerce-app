import { takeEvery, put, call, select } from 'redux-saga/effects';
import PushNotification from 'react-native-push-notification';
import { addCart } from './api';
import { REQUEST_CHECKOUT } from '../../constants/actions';
import { requestCheckOutSuccess, requestCheckOutFailed } from './actions';

export const requestCheckOutTask = function* ({ payload }) {
  try {
    const { productId } = payload;
    const token = yield select((state) => state.loginReducer.token);
    const { status, data } = yield call(addCart, token, productId, 1);
    if (status !== 200) {
      const error = {
        errorCode: status,
        errorMsg: data.Error,
      };
      return yield put(requestCheckOutFailed(error));
    }
    PushNotification.localNotification({
      message: 'Product added succesfully', // (required)
      title: 'Ecommerce Store',
      smallIcon: 'abante_logo',
      largeIcon: 'abante_logo',
    });
    return yield put(requestCheckOutSuccess(data));
  } catch (error) {
    return yield put(
      requestCheckOutFailed({
        errorCode: 500,
        errorMsg: error.message,
      }),
    );
  }
};

const watchCheckOutSagas = function* () {
  yield takeEvery(REQUEST_CHECKOUT, requestCheckOutTask);
};

export default watchCheckOutSagas;
