/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Text } from 'native-base';

const MenuHeaderItem = ({ text }) => {
  return (
    <ListItem itemDivider>
      <Text>{text}</Text>
    </ListItem>
  );
};

MenuHeaderItem.propTypes = {
  text: PropTypes.string.isRequired,
};
export default MenuHeaderItem;
