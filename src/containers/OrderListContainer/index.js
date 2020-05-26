import React, { useEffect } from 'react';
import { Spinner, Toast } from 'native-base';
import OrderList from '../../components/OrderList';
import { useOrderList } from '../../hooks';

const OrderListContainer = () => {
  const { fetch, orderList, orderListLoading, orderListError } = useOrderList();

  useEffect(() => {
    fetch();
  }, []);

  const showError = (error) => {
    if (error) {
      const { errorCode, errorMsg } = error;
      setTimeout(() => {
        Toast.show({
          text: `Error code: ${errorCode} - ${errorMsg} `,
          buttonText: 'OK',
          type: 'danger',
          duration: 3000,
        });
      }, 100);
    }
  };

  return (
    <>
      {orderListLoading ? (
        <Spinner />
      ) : (
        <>
          {showError(orderListError)}
          <OrderList data={orderList} />
        </>
      )}
    </>
  );
};

export default OrderListContainer;
