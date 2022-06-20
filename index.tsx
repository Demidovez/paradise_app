import React from 'react';
import {AppRegistry, View, StyleSheet} from 'react-native';
import App from './src/index';
import appData from './app.json';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const RootApp = () => (
  <View style={styles.container}>
    <Provider store={store}>
      <App />
    </Provider>
  </View>
);

AppRegistry.registerComponent(appData.name, () => RootApp);

const styles = StyleSheet.create({
  container: {flex: 1},
});
