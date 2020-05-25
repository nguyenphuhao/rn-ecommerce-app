import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {
  selectAuthToken,
  selectAuthLoading,
  selectAuthError,
} from '../models/authentication/selectors';
import {
  requestLogin,
  checkAuthorized,
} from '../models/authentication/actions';
import { AUTH_TOKEN } from '../constants';

const useAuthentication = () => {
  const dispatch = useDispatch();
  const authToken = useSelector(selectAuthToken);
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const login = (username, password) => {
    dispatch(requestLogin(username, password));
  };

  const authorized = () => {
    AsyncStorage.getItem(AUTH_TOKEN).then((token) => {
      if (token) {
        dispatch(checkAuthorized(token));
      }
    });
  };

  useEffect(() => {
    if (authToken) {
      AsyncStorage.setItem(AUTH_TOKEN, authToken);
    }
  }, [authLoading]);

  return {
    login,
    authorized,
    authToken,
    authLoading,
    authError,
  };
};

export default useAuthentication;
