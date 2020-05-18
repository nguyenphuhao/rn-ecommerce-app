import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import { SplashStackScreen } from './constants/screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SplashStackScreen}>
        <Stack.Screen name={SplashStackScreen} component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
