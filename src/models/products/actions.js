import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
} from '../../constants';

export const fetchProductList = (categoryId) => {
  return {
    type: FETCH_PRODUCTS,
    payload: {
      categoryId,
    },
  };
};

export const fetchProductListSuccess = (productList) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: {
      productList,
    },
  };
};

export const fetchProductListFailed = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILED,
    payload: {
      error,
    },
  };
};
