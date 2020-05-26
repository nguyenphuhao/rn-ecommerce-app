import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const ProductItem = ({ item }) => {
  const { thumb, name, currency, price } = item;
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{ uri: `http:${thumb}` }} />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.currentPrice}>{`${currency} ${price}`}</Text>
          {/* <Text style={styles.oldPrice}>$ 244</Text>
          <Text style={styles.discount}>9% Off</Text> */}
        </View>
      </View>
    </View>
  );
};

ProductItem.propTypes = {
  item: PropTypes.shape({
    thumb: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};
export default ProductItem;
