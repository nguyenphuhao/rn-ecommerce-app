import { useSelector, useDispatch } from 'react-redux';
import {
  selectAuthToken,
  selectAuthLoading,
  selectAuthError,
} from '../models/authentication/selectors';
import { requestLogin } from '../models/authentication/actions';

const useAuthentication = () => {
  const dispatch = useDispatch();
  const authToken = useSelector(selectAuthToken);
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const login = (username, password) => {
    dispatch(requestLogin(username, password));
  };

  return {
    login,
    authToken,
    authLoading,
    authError,
  };
};

export default useAuthentication;
