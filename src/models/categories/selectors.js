import { createSelector } from 'reselect';
import { mapCategoryList } from './helpers';

const categoryListSelector = (state) => state.categoryReducer.categoryList;
const categoryListLoadingSelector = (state) => state.categoryReducer.isLoading;
const categoryListErrorSelector = (state) => state.categoryReducer.error;

export const selectCategoryListError = createSelector(
  categoryListErrorSelector,
  (error) => error,
);
export const selectCategoryListLoading = createSelector(
  categoryListLoadingSelector,
  (loading) => loading,
);
export const selectCategoryList = createSelector(
  categoryListSelector,
  (categoryList) => categoryList.map(mapCategoryList),
);
