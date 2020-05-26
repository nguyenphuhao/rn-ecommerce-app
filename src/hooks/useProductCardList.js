import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectProductListByCates,
  selectProductListLoading,
  selectProductListError,
} from '../models/products/selectors';
import { fetchProductListByCates } from '../models/products/actions';
import useCategoryList from './useCategoryList';

const useProductCardList = () => {
  const dispatch = useDispatch();
  const { categoryList, categoryListLoading } = useCategoryList();
  const productListByCates = useSelector(selectProductListByCates);
  const productListLoading = useSelector(selectProductListLoading);
  const productListError = useSelector(selectProductListError);

  const fetch = (categories) => {
    dispatch(fetchProductListByCates(categories));
  };

  useEffect(() => {
    if (categoryList && categoryList.length && !categoryListLoading) {
      dispatch(fetchProductListByCates(categoryList));
    }
  }, [categoryListLoading]);

  return {
    fetch,
    productListByCates,
    productListLoading,
    productListError,
  };
};

export default useProductCardList;
