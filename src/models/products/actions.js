import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS_BY_CATEGORIES,
  FETCH_PRODUCTS_BY_CATEGORIES_APPEND,
  FETCH_PRODUCTS_BY_CATEGORIES_SUCCESS,
  FETCH_PRODUCTS_BY_CATEGORIES_FAILED,
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

export const fetchProductListByCates = (categories) => {
  return {
    type: FETCH_PRODUCTS_BY_CATEGORIES,
    payload: {
      categories,
    },
  };
};

export const fetchProductListByCatesAppend = (product) => {
  return {
    type: FETCH_PRODUCTS_BY_CATEGORIES_APPEND,
    payload: {
      product,
    },
  };
};

export const fetchProductListByCatesSuccess = () => {
  return {
    type: FETCH_PRODUCTS_BY_CATEGORIES_SUCCESS,
  };
};

export const fetchProductListByCatesFailed = (error) => {
  return {
    type: FETCH_PRODUCTS_BY_CATEGORIES_FAILED,
    payload: {
      error,
    },
  };
};
