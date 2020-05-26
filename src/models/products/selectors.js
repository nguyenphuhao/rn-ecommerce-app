import { createSelector } from 'reselect';
import { mapProductList, mapProductListByCates } from './helpers';

const productListSelector = (state) => state.productReducer.productList;
const productListLoadingSelector = (state) => state.productReducer.isLoading;
const productListErrorSelector = (state) => state.productReducer.error;

const productListByCatesSelector = (state) =>
  state.productReducer.productListByCates;

export const selectProductListError = createSelector(
  productListErrorSelector,
  (error) => error,
);
export const selectProductListLoading = createSelector(
  productListLoadingSelector,
  (loading) => loading,
);
export const selectProductList = createSelector(
  productListSelector,
  (productList) => (productList ? productList.map(mapProductList) : []),
);
export const selectProductListByCates = createSelector(
  productListByCatesSelector,
  (productListByCates) =>
    productListByCates ? productListByCates.map(mapProductListByCates) : [],
);
