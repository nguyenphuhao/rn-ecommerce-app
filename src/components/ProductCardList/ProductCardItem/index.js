import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';
import { Text, Button, Icon } from 'native-base';
import styles from './styles';

const ProductCardItem = ({ item, onAddToCart }) => {
  const { id, thumb, name, currency, price } = item;
  return (
    <View key={`cardItem-${id}`} style={styles.container}>
      <Image style={styles.img} source={{ uri: `http:${thumb}` }} />
      <Text>{name}</Text>
      <View style={styles.price}>
        <Text style={styles.priceText}>{`${currency} ${price}`}</Text>
      </View>
      <Button
        onPress={() => onAddToCart(id)}
        block
        small
        style={styles.addCart}
      >
        <Icon type="AntDesign" name="shoppingcart" />
      </Button>
    </View>
  );
};

ProductCardItem.defaultProps = {
  item: {
    thumb: '',
  },
};

ProductCardItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumb: PropTypes.string,
    name: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCardItem;
