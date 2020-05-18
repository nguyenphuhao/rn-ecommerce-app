import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

let store = null;

export const getStore = () => {
  return store;
};
export const configureStore = ({ rootReducer, rootSagas }) => {
  const sagaMiddleware = createSagaMiddleware();
  store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSagas);
  return store;
};
