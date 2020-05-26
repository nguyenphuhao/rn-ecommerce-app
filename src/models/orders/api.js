import axios from 'axios';
import { API_ENDPOINT } from 'react-native-dotenv';

export const getOrderList = (token) => {
  const body = new FormData();
  body.append('token', token);
  const url = `${API_ENDPOINT}a/account/history`;
  return axios.post(url, body);
};
