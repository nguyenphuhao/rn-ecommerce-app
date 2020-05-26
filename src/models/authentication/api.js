import axios from 'axios';
import { API_ENDPOINT } from 'react-native-dotenv';

export const requestLogin = (loginname, password) => {
  const body = new FormData();
  body.append('loginname', loginname);
  body.append('password', password);
  const url = `${API_ENDPOINT}a/account/login`;
  return axios.post(url, body);
};

export const authorized = (token) => {
  const body = new FormData();
  body.append('token', token);
  const url = `${API_ENDPOINT}a/account/login`;
  return axios.post(url, body);
};
