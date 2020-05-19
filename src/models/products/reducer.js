import produce from 'immer';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
} from '../../constants';

const initialState = {
  productList: [],
  error: null,
  isLoading: true,
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
    }
  });
};
export default categoryReducer;
