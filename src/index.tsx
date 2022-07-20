import React, {useEffect} from "react";
import {StyleSheet, StatusBar, View, SafeAreaView} from "react-native";
import Navigate from "./navigation/mainNavigator";
import ToastContainer from "./components/ToastContainer";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import "moment/locale/ru";

export default function App() {
  useEffect(() => {
    changeNavigationBarColor("#FFFFFF", true, false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
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
