/* eslint-disable no-plusplus */
import { takeEvery, put, call } from 'redux-saga/effects';
import take from 'lodash/take';
import { getProductList } from './api';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_BY_CATEGORIES,
} from '../../constants/actions';
import {
  fetchProductListSuccess,
  fetchProductListFailed,
  fetchProductListByCatesAppend,
  fetchProductListByCatesSuccess,
  fetchProductListByCatesFailed,
} from './actions';

export const fetchProductListTask = function* ({ payload }) {
  try {
    const { categoryId } = payload;
    const { status, data } = yield call(getProductList, categoryId);
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

export const fetchProductListByCatesTask = function* ({ payload }) {
  try {
    const { categories } = payload;
    if (!categories) {
      return yield put(fetchProductListByCatesSuccess(null));
    }
    for (let index = 0; index < categories.length; index++) {
      const category = categories[index];
      const { status, data } = yield getProductList(category.id);
      if (status !== 200) {
        const error = {
          errorCode: status,
          errorMsg: data.Error,
        };
        return yield put(fetchProductListByCatesFailed(error));
      }
      yield put(
        fetchProductListByCatesAppend({
          category,
          productList: take(data.rows, 2) || [],
        }),
      );
    }
    return yield put(fetchProductListByCatesSuccess());
  } catch (error) {
    return yield put(
      fetchProductListByCatesFailed({
        errorCode: 500,
        errorMsg: error.message,
      }),
    );
  }
};

const watchProductSagas = function* () {
  yield takeEvery(FETCH_PRODUCTS, fetchProductListTask);
  yield takeEvery(FETCH_PRODUCTS_BY_CATEGORIES, fetchProductListByCatesTask);
};

export default watchProductSagas;
