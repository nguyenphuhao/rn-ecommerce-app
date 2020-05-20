import React from 'react';
import { Spinner, Toast } from 'native-base';
import ProductCardList from '../../components/ProductCardList';
import useProductCardList from '../../hooks/useProductCardList';

const ProductCardListContainer = () => {
  const {
    productListByCates,
    productListLoading,
    productListError,
  } = useProductCardList();

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
      {productListLoading ? (
        <Spinner />
      ) : (
        <>
          {showError(productListError)}
          {productListByCates && <ProductCardList data={productListByCates} />}
        </>
      )}
    </>
  );
};

export default ProductCardListContainer;
