import React, { useCallback } from 'react';
import { Spinner, Toast } from 'native-base';
import customToast from 'react-native-custom-toast';
import ProductCardList from '../../components/ProductCardList';
import useProductCardList from '../../hooks/useProductCardList';
import useCheckOut from '../../hooks/useCheckOut';

const ProductCardListContainer = () => {
  const {
    productListByCates,
    productListLoading,
    productListError,
  } = useProductCardList();
  const { addToCart } = useCheckOut();

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

  const handleAddToCart = useCallback((productId) => {
    addToCart(productId);
    customToast.show('Product added to your wish list', 3000);
  }, []);
  return (
    <>
      {productListLoading ? (
        <Spinner />
      ) : (
        <>
          {showError(productListError)}
          {productListByCates && (
            <ProductCardList
              onAddToCart={handleAddToCart}
              data={productListByCates}
            />
          )}
        </>
      )}
    </>
  );
};

export default ProductCardListContainer;
