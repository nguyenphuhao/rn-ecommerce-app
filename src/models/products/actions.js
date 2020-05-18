import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCT_DETAIL,
  FETCH_PRODUCT_DETAIL_SUCCESS,
  FETCH_PRODUCT_DETAIL_FAILED,
} from '../../constants';

export const fetchProducts = (vmuuid) => {
  return {
    type: FETCH_PRODUCTS,
    payload: {
      vmuuid,
    },
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: {
      products,
    },
  };
};

export const fetchProductsFailed = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILED,
    payload: {
      error,
    },
  };
};

export const fetchProductDetail = (id) => {
  return {
    type: FETCH_PRODUCT_DETAIL,
    payload: {
      productId: id,
    },
  };
};

export const fetchProductDetailSuccess = (productDetail) => {
  return {
    type: FETCH_PRODUCT_DETAIL_SUCCESS,
    payload: {
      productDetail,
    },
  };
};

export const fetchProductDetailFailed = (error) => {
  return {
    type: FETCH_PRODUCT_DETAIL_FAILED,
    payload: {
      error,
    },
  };
};
