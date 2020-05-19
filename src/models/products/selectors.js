import { createSelector } from 'reselect';
import { mapProductList } from './helpers';

const productListSelector = (state) => state.productReducer.productList;
const productListLoadingSelector = (state) => state.productReducer.isLoading;
const productListErrorSelector = (state) => state.productReducer.error;

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
  (productList) => productList.map(mapProductList),
);
