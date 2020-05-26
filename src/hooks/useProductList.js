import { useSelector, useDispatch } from 'react-redux';
import {
  selectProductList,
  selectProductListLoading,
  selectProductListError,
} from '../models/products/selectors';
import { fetchProductList } from '../models/products/actions';

const useProductList = () => {
  const dispatch = useDispatch();
  const productList = useSelector(selectProductList);
  const productListLoading = useSelector(selectProductListLoading);
  const productListError = useSelector(selectProductListError);

  const fetch = (categoryId) => {
    dispatch(fetchProductList(categoryId));
  };

  return {
    fetch,
    productList,
    productListLoading,
    productListError,
  };
};

export default useProductList;
