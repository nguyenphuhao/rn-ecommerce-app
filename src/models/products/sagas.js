import { takeEvery, put } from 'redux-saga/effects';
import { getProductList } from './api';
import { FETCH_PRODUCTS } from '../../constants/actions';
import { fetchProductListSuccess, fetchProductListFailed } from './actions';

export const fetchProductListTask = function* ({ payload }) {
  try {
    const { categoryId } = payload;
    const { status, data } = yield getProductList(categoryId);
    if (status !== 200) {
      const error = {
        errorCode: status,
        errorMsg: data.Error,
      };
      return yield put(fetchProductListFailed(error));
    }

    return yield put(fetchProductListSuccess(data.rows || []));
  } catch (error) {
    return yield put(
      fetchProductListFailed({
        errorCode: 500,
        errorMsg: error.message,
      }),
    );
  }
};

const watchProductSagas = function* () {
  yield takeEvery(FETCH_PRODUCTS, fetchProductListTask);
};

export default watchProductSagas;
