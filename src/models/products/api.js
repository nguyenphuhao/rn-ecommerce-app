import axios from 'axios';
import { API_ENDPOINT } from 'react-native-dotenv';

export const getProductList = (categoryId) => {
  const url = `${API_ENDPOINT}a/product/filter&category_id=${categoryId}`;
  return axios.get(url);
};
