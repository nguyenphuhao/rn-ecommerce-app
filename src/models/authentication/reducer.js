import produce from 'immer';
import {
  REQUEST_LOGIN,
  REQUEST_LOGIN_SUCCESS,
  REQUEST_LOGIN_FAILED,
  REFRESH_TOKEN,
} from '../../constants';

const initialState = {
  token: null,
  error: null,
  isLoading: false,
};
const loginReducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    switch (type) {
      case REQUEST_LOGIN:
        draft.isLoading = true;
        break;
      case REFRESH_TOKEN:
        draft.isLoading = true;
        break;
      case REQUEST_LOGIN_SUCCESS:
        draft.token = payload.token;
        draft.isLoading = false;
        draft.error = null;
        break;
      case REQUEST_LOGIN_FAILED:
        draft.token = null;
        draft.isLoading = false;
        draft.error = payload.error;
        break;
    }
  });
};
export default loginReducer;
