import React, {useCallback, useMemo} from "react";
import {View, StatusBar, StyleSheet} from "react-native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import {Routes} from "./routes";
import {useAppSelector} from "../hooks";
import {Selectors} from "../redux/selectors/selectors";
import MaterialCategory from "../pages/MaterialCategory";
import {IMaterial, IMaterialCategory} from "../types/types";
import LibraryPage from "../pages/Library";
import MaterialPage from "../pages/Material";

export type TLibraryStackParamList = {
  [Routes.MaterialCategory]: {category: IMaterialCategory};
  [Routes.MaterialPage]: {id: IMaterial};
  [Routes.LibraryHome]: undefined;
};

export type TLibraryStackScreenProps<
  Screen extends keyof TLibraryStackParamList,
> = NativeStackScreenProps<TLibraryStackParamList, Screen>;

const LibraryStack = createNativeStackNavigator<TLibraryStackParamList>();

export default function LibraryNavigator() {
  // console.log("Library");

  const theme = useAppSelector(Selectors.getTheme);

  const style = useMemo(
    () => [styles.container, {backgroundColor: theme.colors.background}],
    [theme],
  );

  const options = useMemo(
    () => ({
      headerShown: false,
    }),
    [],
  );

  const screenListeners = useCallback(
    ({navigation, route}) => ({
      focus: (e: any) => {
        switch (route.name) {
          case Routes.LibraryHome:
          case Routes.MaterialPage:
            StatusBar.setBackgroundColor("#FFFFFF");
            break;
          case Routes.MaterialCategory:
            StatusBar.setBackgroundColor("#f2f3f5DD");
            break;
        }
      },
    }),
    [],
  );

  return (
    <View style={style}>
      <LibraryStack.Navigator
        screenOptions={options}
        screenListeners={screenListeners}
        initialRouteName={Routes.LibraryHome}>
        <LibraryStack.Screen
          name={Routes.LibraryHome}
          component={LibraryPage}
        />
        <LibraryStack.Screen
          name={Routes.MaterialCategory}
          component={MaterialCategory}
          options={{
            animation: "none",
          }}
        />
        <LibraryStack.Screen
          name={Routes.MaterialPage}
          component={MaterialPage}
          options={{
            animation: "none",
          }}
        />
      </LibraryStack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
