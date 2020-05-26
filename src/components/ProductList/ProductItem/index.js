import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import { Button, Icon } from 'native-base';
import styles from './styles';

const ProductItem = ({ item, onAddToCart }) => {
  const { id, thumb, name, currency, price } = item;
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{ uri: `http:${thumb}` }} />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.currentPrice}>{`${currency} ${price}`}</Text>
        </View>
        <Button
          onPress={() => onAddToCart(id)}
          full
          small
          style={styles.addCart}
        >
          <Icon type="AntDesign" name="shoppingcart" />
        </Button>
      </View>
    </View>
  );
};

ProductItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
export default ProductItem;
