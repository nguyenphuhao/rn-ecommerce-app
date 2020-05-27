import axios from 'axios';
import { API_ENDPOINT } from 'react-native-dotenv';

export const addCart = (token, productId, quantity) => {
  const body = new FormData();
  body.append('token', token);
  body.append('product_id', productId);
  body.append('quantity', quantity);
  const url = `${API_ENDPOINT}a/checkout/cart`;
  return axios.post(url, body);
};
