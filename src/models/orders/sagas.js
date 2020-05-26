/* eslint-disable no-plusplus */
import { takeEvery, put, call, select } from 'redux-saga/effects';
import { getOrderList } from './api';
import { FETCH_ORDER_LIST } from '../../constants/actions';
import { fetchOrderListSuccess, fetchOrderListFailed } from './actions';

export const fetchOrderListTask = function* () {
  try {
    const token = yield select((state) => state.loginReducer.token);
    const { status, data } = yield call(getOrderList, token);
    if (status !== 200) {
      const error = {
        errorCode: status,
        errorMsg: data.Error,
      };
      return yield put(fetchOrderListFailed(error));
    }
    return yield put(fetchOrderListSuccess(data.orders || []));
  } catch (error) {
    return yield put(
      fetchOrderListFailed({
        errorCode: 500,
        errorMsg: error.message,
      }),
    );
  }
};

const watchOrdersSagas = function* () {
  yield takeEvery(FETCH_ORDER_LIST, fetchOrderListTask);
};

export default watchOrdersSagas;
