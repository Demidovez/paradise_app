import React, {useEffect} from "react";
import {StyleSheet, StatusBar} from "react-native";
import Navigate from "./navigation/mainNavigator";
import ToastContainer from "./components/ToastContainer";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import "moment/locale/ru";

export default function App() {
  useEffect(() => {
    changeNavigationBarColor("#FFFFFF", true, false);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          animated={true}
          barStyle="dark-content"
          backgroundColor="#f2f3f5DD"
          translucent={true}
        />
        <Navigate />
        <ToastContainer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
