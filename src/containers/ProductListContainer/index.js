import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Spinner, Toast } from 'native-base';
import ProductList from '../../components/ProductList';
import useProductList from '../../hooks/useProductList';

const ProductListContainer = ({ categoryId }) => {
  const {
    fetch,
    productList,
    productListLoading,
    productListError,
  } = useProductList();

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

  return (
    <>
      {productListLoading ? (
        <Spinner />
      ) : (
        <>
          {showError(productListError)}
          <ProductList data={productList} />
        </>
      )}
    </>
  );
};

ProductListContainer.propTypes = {
  categoryId: PropTypes.string.isRequired,
};
export default ProductListContainer;
