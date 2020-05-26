import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectCategoryList,
  selectCategoryListLoading,
  selectCategoryListError,
} from '../models/categories/selectors';
import { fetchCategoryList } from '../models/categories/actions';

const useCategoryList = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector(selectCategoryList);
  const categoryListLoading = useSelector(selectCategoryListLoading);
  const categoryListError = useSelector(selectCategoryListError);

  const fetch = () => {
    dispatch(fetchCategoryList());
  };

  useEffect(() => {
    fetch();
  }, []);

  return {
    categoryList,
    categoryListLoading,
    categoryListError,
  };
};

export default useCategoryList;
