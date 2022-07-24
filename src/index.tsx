import React, {useEffect} from "react";
import {StyleSheet, StatusBar, View, SafeAreaView} from "react-native";
import Navigate from "./navigation/mainNavigator";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import "moment/locale/ru";
import {useAppDispatch} from "./hooks/redux";
import {fetchUser} from "./store/reducers/UserSlice";

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    changeNavigationBarColor("#FFFFFF", true, false);
    dispatch(fetchUser());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Navigate />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
