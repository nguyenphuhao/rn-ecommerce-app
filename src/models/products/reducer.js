import produce from 'immer';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS_BY_CATEGORIES,
  FETCH_PRODUCTS_BY_CATEGORIES_APPEND,
  FETCH_PRODUCTS_BY_CATEGORIES_SUCCESS,
  FETCH_PRODUCTS_BY_CATEGORIES_FAILED,
} from '../../constants';

const initialState = {
  productList: [],
  productListByCates: [],
  error: null,
  isLoading: false,
};
const categoryReducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    switch (type) {
      case FETCH_PRODUCTS:
        draft.isLoading = true;
        break;
      case FETCH_PRODUCTS_SUCCESS:
        draft.productList = payload.productList;
        draft.isLoading = false;
        draft.error = null;
        break;
      case FETCH_PRODUCTS_FAILED:
        draft.productList.length = 0;
        draft.isLoading = false;
        draft.error = payload.error;
        break;
      case FETCH_PRODUCTS_BY_CATEGORIES:
        draft.isLoading = true;
        break;
      case FETCH_PRODUCTS_BY_CATEGORIES_APPEND:
        if (payload.product) {
          draft.productListByCates.push(payload.product);
        }
        break;
      case FETCH_PRODUCTS_BY_CATEGORIES_SUCCESS:
        draft.isLoading = false;
        draft.error = null;
        break;
      case FETCH_PRODUCTS_BY_CATEGORIES_FAILED:
        draft.productListByCates.length = 0;
        draft.isLoading = false;
        draft.error = payload.error;
        break;
    }
  });
};
export default categoryReducer;
