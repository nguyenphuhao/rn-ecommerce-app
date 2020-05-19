/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens';
import HeaderBarContainer from './containers/HeaderBarContainer';
import { HomeStackScreen } from './constants/screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={HomeStackScreen}
        screenOptions={{
          header: (props) => <HeaderBarContainer {...props} />,
        }}
      >
        <Stack.Screen
          options={{ title: 'Awesome app' }}
          name={HomeStackScreen}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
