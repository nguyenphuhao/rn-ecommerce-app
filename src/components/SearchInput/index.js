import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Item, Input, Icon } from 'native-base';
import styles from './styles';

const SearchInput = ({ isVisible }) => {
  return (
    <>
      {isVisible ? (
        <View style={styles.container}>
          <Item rounded style={styles.searchItem}>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
        </View>
      ) : (
        ''
      )}
    </>
  );
};

SearchInput.defaultProps = {
  isVisible: true,
};
SearchInput.propTypes = {
  isVisible: PropTypes.bool,
};

export default SearchInput;
