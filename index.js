/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */

/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import customTheme from './native-base-theme/variables/customTheme';
import { configureStore } from './src/utils';
import App from './src/App';
import { name as appName } from './app.json';
import { rootReducer, rootSagas } from './src/models';


const store = configureStore({ rootReducer, rootSagas });

const MainApp = () => {
  return (
    <Provider store={store}>
      <StyleProvider style={getTheme(customTheme)}>
        <App />
      </StyleProvider>

    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
