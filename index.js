/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from './src/utils';
import App from './src/App';
import { name as appName } from './app.json';
import { rootReducer, rootSagas } from './src/models';

const store = configureStore({ rootReducer, rootSagas });

const MainApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
