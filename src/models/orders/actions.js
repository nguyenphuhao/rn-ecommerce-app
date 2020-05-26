import {
  FETCH_ORDER_LIST,
  FETCH_ORDER_LIST_SUCCESS,
  FETCH_ORDER_LIST_FAILED,
} from '../../constants';

export const fetchOrderList = () => {
  return {
    type: FETCH_ORDER_LIST,
  };
};

export const fetchOrderListSuccess = (orderList) => {
  return {
    type: FETCH_ORDER_LIST_SUCCESS,
    payload: {
      orderList,
    },
  };
};

export const fetchOrderListFailed = (error) => {
  return {
    type: FETCH_ORDER_LIST_FAILED,
    payload: {
      error,
    },
  };
};
