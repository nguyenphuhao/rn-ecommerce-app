import produce from 'immer';
import {
  REQUEST_CHECKOUT,
  REQUEST_CHECKOUT_SUCCESS,
  REQUEST_CHECKOUT_FAILED,
} from '../../constants';

const initialState = {
  cart: null,
  error: null,
  isLoading: false,
};
const checkOutReducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    switch (type) {
      case REQUEST_CHECKOUT:
        draft.isLoading = true;
        break;
      case REQUEST_CHECKOUT_SUCCESS:
        draft.cart = payload.cart;
        draft.isLoading = false;
        draft.error = null;
        break;
      case REQUEST_CHECKOUT_FAILED:
        draft.isLoading = false;
        draft.error = payload.error;
        break;
    }
  });
};
export default checkOutReducer;
