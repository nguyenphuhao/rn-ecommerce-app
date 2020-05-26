import { useSelector, useDispatch } from 'react-redux';
import {
  selectCart,
  selectCartLoading,
  selectCartError,
} from '../models/checkout/selectors';
import { requestCheckOut } from '../models/checkout/actions';

const useCheckOut = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const cartLoading = useSelector(selectCartLoading);
  const cartError = useSelector(selectCartError);

  const addToCart = (productId) => {
    dispatch(requestCheckOut(productId));
  };

  return {
    addToCart,
    cart,
    cartLoading,
    cartError,
  };
};

export default useCheckOut;
