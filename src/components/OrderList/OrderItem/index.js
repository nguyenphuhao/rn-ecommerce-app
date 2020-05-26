import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const OrderItem = ({ item }) => {
  const { id, status, name, products, total, createdDate } = item;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Order Id: ${id}`}</Text>
      <Text style={styles.text}>{`Status: ${status}`}</Text>
      <Text style={styles.text}>{`Date Added: ${createdDate}`}</Text>
      <Text style={styles.text}>{`Customer: ${name}`}</Text>
      <Text style={styles.text}>{`Products: ${products}`}</Text>
      <Text style={styles.text}>{`Total: ${total}`}</Text>
    </View>
  );
};

OrderItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    products: PropTypes.number.isRequired,
    total: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    createdDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderItem;
