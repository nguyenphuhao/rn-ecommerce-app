import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text } from 'react-native';
import styles from './styles';
import OrderItem from './OrderItem';

const OrderList = ({ data }) => {
  return (
    <>
      <FlatList
        contentContainerStyle={styles.container}
        data={data}
        renderItem={({ item }) => {
          return <OrderItem item={item} />;
        }}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>No order found.</Text>}
      />
    </>
  );
};

OrderList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      thumb: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default OrderList;
