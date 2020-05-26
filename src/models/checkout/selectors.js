import { createSelector } from 'reselect';

const cartSelector = (state) => state.checkOutReducer.cart;
const cartLoadingSelector = (state) => state.checkOutReducer.isLoading;
const cartErrorSelector = (state) => state.checkOutReducer.error;

export const selectCartError = createSelector(
  cartErrorSelector,
  (error) => error,
);
export const selectCartLoading = createSelector(
  cartLoadingSelector,
  (loading) => loading,
);
export const selectCart = createSelector(cartSelector, (cart) => cart);
