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
  requestLoginSuccess,
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

  useEffect(() => {
    const syncAuthToken = async () => {
      const asyncAuthToken = await AsyncStorage.getItem(AUTH_TOKEN);
      console.log('asyncAuthToken', asyncAuthToken);
      if (asyncAuthToken) {
        dispatch(requestLoginSuccess(asyncAuthToken));
      }
    };
    syncAuthToken();
  }, []);

  useEffect(() => {
    if (authToken) {
      AsyncStorage.setItem(AUTH_TOKEN, authToken);
    }
  }, [authLoading]);

  return {
    login,
    authToken,
    authLoading,
    authError,
  };
};

export default useAuthentication;
