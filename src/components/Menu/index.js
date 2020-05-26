/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Share from 'react-native-share';
import { List, H1 } from 'native-base';
import {
  ProfileStackScreen,
  WishListStackScreen,
  CartStackScreen,
  OrdersStackScreen,
  EmailStackScreen,
  CallStackScreen,
} from '../../constants/screens';
import MenuItem from './MenuItem';
import MenuHeaderItem from './MenuHeaderItem';
import styles from './styles';
import Logo from '../Logo';

const Menu = ({ navigation }) => {
  const { navigate } = navigation;
  const shareOptions = {
    title: 'Share via',
    message: 'Abante Shoping',
    social: 'facebook',
    url: 'http://nguyenphuhao.com/abante',
  };
  const openShare = useCallback(() => {
    Share.shareSingle(shareOptions);
  }, []);
  return (
    <>
      <H1 style={styles.headerText}>Ecommerce Store</H1>
      <Logo />
      <List>
        <MenuHeaderItem text="My Account" />
        <MenuItem
          name="ios-person"
          text="My Profile"
          onPress={() => navigate(ProfileStackScreen)}
        />
        <MenuItem
          name="ios-heart"
          text="My Wish List"
          onPress={() => navigate(WishListStackScreen)}
        />
        <MenuItem
          name="md-cart"
          text="My Cart"
          onPress={() => navigate(CartStackScreen)}
        />
        <MenuItem
          type="MaterialCommunityIcons"
          name="cart-arrow-right"
          text="My Orders"
          onPress={() => navigate(OrdersStackScreen)}
        />
        <MenuHeaderItem text="Support" />
        <MenuItem
          type="MaterialCommunityIcons"
          name="email"
          text="Email"
          onPress={() => navigate(EmailStackScreen)}
        />
        <MenuItem
          name="ios-call"
          text="Call"
          onPress={() => navigate(CallStackScreen)}
        />
        <MenuHeaderItem text="Others" />
        <MenuItem name="md-share" text="Share" onPress={openShare} />
      </List>
    </>
  );
};

Menu.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default Menu;
