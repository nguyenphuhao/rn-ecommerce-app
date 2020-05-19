import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectProductList,
  selectProductListLoading,
  selectProductListError,
} from '../models/products/selectors';
import { fetchProductList } from '../models/products/actions';

const useProductList = (categoryId) => {
  const dispatch = useDispatch();
  const productList = useSelector(selectProductList);
  const productListLoading = useSelector(selectProductListLoading);
  const productListError = useSelector(selectProductListError);

  const fetch = () => {
    dispatch(fetchProductList(categoryId));
  };

  useEffect(() => {
    fetch();
  }, []);

  return {
    productList,
    productListLoading,
    productListError,
  };
};

export default useProductList;
