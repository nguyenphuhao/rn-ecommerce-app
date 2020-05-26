import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Spinner, Toast } from 'native-base';
import customToast from 'react-native-custom-toast';
import ProductList from '../../components/ProductList';
import useProductList from '../../hooks/useProductList';
import ProductItem from '../../components/ProductList/ProductItem';
import useCheckOut from '../../hooks/useCheckOut';

const ProductListContainer = ({ categoryId }) => {
  const {
    fetch,
    productList,
    productListLoading,
    productListError,
  } = useProductList();

  const { addToCart } = useCheckOut();
  useEffect(() => {
    fetch(categoryId);
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
          <ProductList
            data={productList}
            renderItem={({ item }) => {
              return <ProductItem item={item} onAddToCart={handleAddToCart} />;
            }}
          />
        </>
      )}
    </>
  );
};

ProductListContainer.propTypes = {
  categoryId: PropTypes.string.isRequired,
};
export default ProductListContainer;
