import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import ProductCardItem from './ProductCardItem';
import styles from './styles';
import { ProductListStackScreen } from '../../constants';

const ProductCardList = ({ data }) => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      {data.map((item) => {
        const { category, productList } = item;
        return (
          <>
            <View key={`header-${category.id}`} style={styles.header}>
              <Text style={styles.headerText}>{category.name}</Text>
              <Button
                style={styles.viewAllButton}
                small
                primary
                onPress={() => navigate(ProductListStackScreen, { category })}
              >
                <Text>View all</Text>
              </Button>
            </View>
            <View key={`content-${category.id}`} style={styles.cardItem}>
              {productList.length &&
                productList.map((product) => {
                  return (
                    <ProductCardItem
                      key={`item-${product.id}`}
                      item={product}
                    />
                  );
                })}
            </View>
          </>
        );
      })}
    </View>
  );
};

ProductCardList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      thumb: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default ProductCardList;
