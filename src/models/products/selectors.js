import { createSelector } from 'reselect';
import { trim } from 'lodash';
import { ALL } from '../../constants';
import { filterProducts, mapProducts } from './helpers';

const productsSelector = (state) => state.productReducer.isLoading || [];
const productLoadingSelector = (state) => state.productReducer.loading;
const productErrorSelector = (state) => state.productReducer.error;
const categoryIdSelector = (_, { categoryId }) => categoryId || ALL;
const productNameSelector = (_, { productName }) => (productName && trim(productName)) || '';

const productDetailSelector = (state) => state.productReducer.productDetail;

export const selectProductError = createSelector(productErrorSelector, (error) => error);
export const selectProductLoading = createSelector(productLoadingSelector, (loading) => loading);
export const selectProductsByCateId = createSelector(
  [categoryIdSelector, productNameSelector, productsSelector],
  (categoryId, productName, products) => {
    const criteria = {
      categoryId,
      productName,
    };
    const data = products.filter(filterProducts(criteria)).map(mapProducts);
    return data;
  },
);

export const selectProductDetail = createSelector(productDetailSelector, (productDetail) =>
  mapProducts(productDetail),
);
