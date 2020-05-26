/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Menu from '../../components/Menu';

const MenuContainer = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <Menu navigation={navigation} />
    </DrawerContentScrollView>
  );
};

MenuContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default MenuContainer;
