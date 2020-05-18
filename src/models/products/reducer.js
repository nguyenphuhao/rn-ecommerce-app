import produce from 'immer';
import { FETCH_PRODUCTS } from '../../constants';

const initialState = {
  productList: [],
  productDetail: null,
  error: null,
  isLoading: true,
};
const productReducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    switch (type) {
      case FETCH_PRODUCTS:
        draft.isLoading = true;
        break;
    }
  });
};
export default productReducer;
