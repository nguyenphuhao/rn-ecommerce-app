import axios from 'axios';
import { API_ENDPOINT } from 'react-native-dotenv';

export const requestLogin = (loginname, password) => {
  const url = `${API_ENDPOINT}a/account/login`;
  return axios.post(url, {
    loginname,
    password,
  });
};
