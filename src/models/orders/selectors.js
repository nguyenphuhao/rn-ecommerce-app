import { createSelector } from 'reselect';
import { mapOrderList } from './helpers';

const orderListSelector = (state) => state.orderReducer.orderList;
const orderListLoadingSelector = (state) => state.orderReducer.isLoading;
const orderListErrorSelector = (state) => state.orderReducer.error;

export const selectOrderListError = createSelector(
  orderListErrorSelector,
  (error) => error,
);
export const selectOrderListLoading = createSelector(
  orderListLoadingSelector,
  (loading) => loading,
);
export const selectOrderList = createSelector(orderListSelector, (orderList) =>
  orderList ? orderList.map(mapOrderList) : [],
);
