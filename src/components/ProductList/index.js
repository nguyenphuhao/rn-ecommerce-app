import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text } from 'react-native';
import styles from './styles';

const ProductList = ({ data, renderItem }) => {
  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={<Text>No product found.</Text>}
    />
  );
};

ProductList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      thumb: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  renderItem: PropTypes.func.isRequired,
};
export default ProductList;
