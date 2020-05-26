import produce from 'immer';
import {
  FETCH_ORDER_LIST,
  FETCH_ORDER_LIST_SUCCESS,
  FETCH_ORDER_LIST_FAILED,
} from '../../constants';

const initialState = {
  orderList: [],
  error: null,
  isLoading: false,
};
const orderReducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    switch (type) {
      case FETCH_ORDER_LIST:
        draft.isLoading = true;
        break;
      case FETCH_ORDER_LIST_SUCCESS:
        draft.orderList = payload.orderList;
        draft.isLoading = false;
        draft.error = null;
        break;
      case FETCH_ORDER_LIST_FAILED:
        draft.orderList.length = 0;
        draft.isLoading = false;
        draft.error = payload.error;
        break;
    }
  });
};
export default orderReducer;
