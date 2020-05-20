import { useSelector, useDispatch } from 'react-redux';
import {
  selectAuthToken,
  selectAuthLoading,
  selectAuthError,
} from '../models/authentication/selectors';
import { requestLogin } from '../models/authentication/actions';

const useCategoryList = () => {
  const dispatch = useDispatch();
  const authToken = useSelector(selectAuthToken);
  const authLoading = useSelector(selectAuthLoading);
  const categoryListError = useSelector(selectAuthError);

  const login = () => {
    dispatch(requestLogin());
  };

  return {
    login,
    authToken,
    authLoading,
    categoryListError,
  };
};

export default useCategoryList;
