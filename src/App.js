/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Spinner } from 'native-base';
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
  SplashScreen,
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
  LoginStackScreen,
  SplashStackScreen,
} from './constants/screens';
import LoginScreen from './screens/LoginScreen';
import { useAuthentication } from './hooks';

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

const Authentication = () => {
  return (
    <Stack.Navigator
      initialRouteName={HomeStackScreen}
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen
        options={{ searchVisible: false, cartVisible: false }}
        name={LoginStackScreen}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  const { authorized, authToken, authLoading } = useAuthentication();
  useEffect(() => {
    authorized();
  }, []);
  return (
    <>
      <NavigationContainer>
        {authToken ? (
          <Drawer.Navigator
            drawerContent={(props) => <MenuContainer {...props} />}
          >
            <Drawer.Screen name={MainStackNavigator} component={Main} />
          </Drawer.Navigator>
        ) : (
          <Stack.Navigator
            screenOptions={{
              header: () => null,
            }}
          >
            {authLoading ? (
              <Stack.Screen
                options={{ searchVisible: false, cartVisible: false }}
                name={SplashStackScreen}
                component={SplashScreen}
              />
            ) : (
              <Stack.Screen
                options={{ searchVisible: false, cartVisible: false }}
                name={LoginStackScreen}
                component={LoginScreen}
              />
            )}
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </>
  );
};

export default App;
