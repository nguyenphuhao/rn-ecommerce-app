import { useSelector, useDispatch } from 'react-redux';
import {
  selectOrderList,
  selectOrderListLoading,
  selectOrderListError,
} from '../models/orders/selectors';
import { fetchOrderList } from '../models/orders/actions';

const useOrderList = () => {
  const dispatch = useDispatch();
  const orderList = useSelector(selectOrderList);
  const orderListLoading = useSelector(selectOrderListLoading);
  const orderListError = useSelector(selectOrderListError);

  const fetch = () => {
    dispatch(fetchOrderList());
  };

  return {
    fetch,
    orderList,
    orderListLoading,
    orderListError,
  };
};

export default useOrderList;
