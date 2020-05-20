import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import categoryReducer from './categories/reducer';
import productReducer from './products/reducer';
import loginReducer from './authentication/reducer';
import watchCategoryListSagas from './categories/sagas';
import watchProductSagas from './products/sagas';
import watchLoginSagas from './authentication/sagas';

export const rootReducer = combineReducers({
  categoryReducer,
  productReducer,
  loginReducer,
});

export const rootSagas = function* rootSagas() {
  yield all([watchCategoryListSagas(), watchProductSagas(), watchLoginSagas()]);
};
