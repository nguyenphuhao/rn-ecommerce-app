import produce from 'immer';
import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILED,
} from '../../constants';

const initialState = {
  categoryList: [],
  error: null,
  isLoading: true,
};
const categoryReducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    switch (type) {
      case FETCH_CATEGORIES:
        draft.isLoading = true;
        break;
      case FETCH_CATEGORIES_SUCCESS:
        draft.categoryList = payload.categoryList;
        draft.isLoading = false;
        draft.error = null;
        break;
      case FETCH_CATEGORIES_FAILED:
        draft.categoryList.length = 0;
        draft.isLoading = false;
        draft.error = payload.error;
        break;
    }
  });
};
export default categoryReducer;
