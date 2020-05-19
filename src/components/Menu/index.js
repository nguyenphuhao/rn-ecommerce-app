/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { List, H1 } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import {
  ProfileStackScreen,
  WishListStackScreen,
  CartStackScreen,
  OrdersStackScreen,
  EmailStackScreen,
  CallStackScreen,
  ShareStackScreen,
} from '../../constants/screens';
import MenuItem from './MenuItem';
import MenuHeaderItem from './MenuHeaderItem';
import styles from './styles';

const Menu = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <>
      <H1 style={styles.headerText}>Ecommerce Store</H1>
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
        <MenuItem
          name="md-share"
          text="Share"
          onPress={() => navigate(ShareStackScreen)}
        />
      </List>
    </>
  );
};
export default Menu;
