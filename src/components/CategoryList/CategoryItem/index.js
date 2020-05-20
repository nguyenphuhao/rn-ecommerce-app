import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native';
import styles from './styles';

const CategoryItem = ({ item }) => {
  const { thumb, name } = item;
  return (
    <View style={styles.cateItem}>
      <Image style={styles.cateImg} source={{ uri: `http:${thumb}` }} />
      <Text style={styles.cateName}>{name}</Text>
    </View>
  );
};

CategoryItem.propTypes = {
  item: PropTypes.shape({
    thumb: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryItem;
