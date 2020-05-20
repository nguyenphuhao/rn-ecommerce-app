import axios from 'axios';
import { API_ENDPOINT } from 'react-native-dotenv';

export const getCategoryList = () => {
  const url = `${API_ENDPOINT}a/product/category&path=0`;
  return axios.get(url);
};
