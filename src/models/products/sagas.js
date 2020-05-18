import { takeEvery } from 'redux-saga/effects';
import { getProductList } from './api';
import { FETCH_PRODUCTS } from '../../constants/actions';

export const fetchProductsTask = function* ({ payload }) {
  yield getProductList();
};

const watchProductsSagas = function* () {
  yield takeEvery(FETCH_PRODUCTS, fetchProductsTask);
};

export default watchProductsSagas;
