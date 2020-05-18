import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import productReducer from './products/reducer';
import watchProductsSagas from './products/sagas';

export const rootReducer = combineReducers({
  productReducer,
});

export const rootSagas = function* rootSagas() {
  yield all([watchProductsSagas()]);
};
