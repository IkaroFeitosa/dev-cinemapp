import * as React from 'react';
import { AppRegistry,StatusBar} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './src/App';
import {Provider} from 'react-redux'
import store from './src/store'

export default function Main() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);