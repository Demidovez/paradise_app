import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import Navigate from './navigation/mainNavigator';
import ToastContainer from './components/ToastContainer';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import moment from 'moment';

moment.locale('ru-RU');

export default function App() {
  useEffect(() => {
    changeNavigationBarColor('#FFFFFF', true, false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="white"
        translucent={true}
      />
      <Navigate />
      <ToastContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
