import { takeEvery, put, call } from 'redux-saga/effects';
import { getCategoryList } from './api';
import { FETCH_CATEGORIES } from '../../constants/actions';
import { fetchCategoryListSuccess, fetchCategoryListFailed } from './actions';

export const fetchCategoryListTask = function* () {
  try {
    const { status, data } = yield call(getCategoryList);
    if (status !== 200) {
      const error = {
        errorCode: status,
        errorMsg: data.Error,
      };
      return yield put(fetchCategoryListFailed(error));
    }

    return yield put(fetchCategoryListSuccess(data.subcategories || []));
  } catch (error) {
    return yield put(
      fetchCategoryListFailed({
        errorCode: 500,
        errorMsg: error.message,
      }),
    );
  }
};

const watchCategoryListSagas = function* () {
  yield takeEvery(FETCH_CATEGORIES, fetchCategoryListTask);
};

export default watchCategoryListSagas;
