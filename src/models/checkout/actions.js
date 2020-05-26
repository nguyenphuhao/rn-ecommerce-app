import {
  REQUEST_CHECKOUT,
  REQUEST_CHECKOUT_SUCCESS,
  REQUEST_CHECKOUT_FAILED,
} from '../../constants';

export const requestCheckOut = (productId) => {
  return {
    type: REQUEST_CHECKOUT,
    payload: {
      productId,
    },
  };
};

export const requestCheckOutSuccess = (cart) => {
  return {
    type: REQUEST_CHECKOUT_SUCCESS,
    payload: {
      cart,
    },
  };
};

export const requestCheckOutFailed = (error) => {
  return {
    type: REQUEST_CHECKOUT_FAILED,
    payload: {
      error,
    },
  };
};
