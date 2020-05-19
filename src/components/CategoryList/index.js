import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CategoryItem from './CategoryItem';
import styles from './styles';

const CategoryList = ({ data, onSelectItem }) => {
  return (
    <FlatList
      style={styles.cateList}
      data={data}
      horizontal
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              onSelectItem(item);
            }}
          >
            <CategoryItem item={item} />
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.category_id}
      ListEmptyComponent={<Text>No category found.</Text>}
    />
  );
};

CategoryList.defaultProps = {
  onSelectItem: () => {},
};

CategoryList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      thumb: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onSelectItem: PropTypes.func,
};
export default CategoryList;
