/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {
  HomeScreen,
  ProfileScreen,
  WishListScreen,
  CartScreen,
  OrderScreen,
  EmailScreen,
  CallScreen,
  ShareScreen,
  SearchScreen,
  ProductListScreen,
} from './screens';
import { HeaderBarContainer, MenuContainer } from './containers';
import {
  MainStackNavigator,
  HomeStackScreen,
  ProfileStackScreen,
  WishListStackScreen,
  CartStackScreen,
  OrdersStackScreen,
  EmailStackScreen,
  CallStackScreen,
  ShareStackScreen,
  SearchStackScreen,
  ProductListStackScreen,
} from './constants/screens';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator
      initialRouteName={HomeStackScreen}
      screenOptions={{
        header: (props) => <HeaderBarContainer {...props} />,
      }}
    >
      <Stack.Screen
        options={{
          title: 'Ecommerce Store',
          searchVisible: false,
          menuVisible: true,
        }}
        name={HomeStackScreen}
        component={HomeScreen}
      />

      <Stack.Screen
        options={{
          title: 'My Profile',
          searchVisible: false,
          cartVisible: true,
        }}
        name={ProfileStackScreen}
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{
          title: 'My Wish List',
          searchVisible: false,
          cartVisible: true,
        }}
        name={WishListStackScreen}
        component={WishListScreen}
      />
      <Stack.Screen
        options={{ title: 'My Cart', searchVisible: false, cartVisible: false }}
        name={CartStackScreen}
        component={CartScreen}
      />
      <Stack.Screen
        options={{ title: 'My Order', searchVisible: false, cartVisible: true }}
        name={OrdersStackScreen}
        component={OrderScreen}
      />
      <Stack.Screen
        options={{ title: 'Email', searchVisible: false, cartVisible: false }}
        name={EmailStackScreen}
        component={EmailScreen}
      />
      <Stack.Screen
        options={{ title: 'Call', searchVisible: false, cartVisible: false }}
        name={CallStackScreen}
        component={CallScreen}
      />
      <Stack.Screen
        options={{ title: 'Share', searchVisible: false, cartVisible: false }}
        name={ShareStackScreen}
        component={ShareScreen}
      />
      <Stack.Screen
        options={{ title: 'Search', searchVisible: false, cartVisible: false }}
        name={SearchStackScreen}
        component={SearchScreen}
      />
      <Stack.Screen
        options={{ searchVisible: false, cartVisible: false }}
        name={ProductListStackScreen}
        component={ProductListScreen}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <MenuContainer {...props} />}>
        <Drawer.Screen name={MainStackNavigator} component={Main} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
