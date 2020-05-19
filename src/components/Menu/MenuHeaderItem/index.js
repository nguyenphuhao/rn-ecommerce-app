/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ListItem, Text } from 'native-base';

const MenuHeaderItem = ({ text }) => {
  return (
    <ListItem itemDivider>
      <Text>{text}</Text>
    </ListItem>
  );
};
export default MenuHeaderItem;
