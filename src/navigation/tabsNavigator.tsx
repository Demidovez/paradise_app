import React, {useCallback} from "react";
import {useAppSelector} from "../hooks/redux";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {View, StyleSheet} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import HomePage from "../pages/Home";
import UserPage from "../pages/User";
import FeedPage from "../pages/Feed";
import {Routes} from "./routes";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import LibraryNavigator from "./libraryNavigator";

export type TTabsStackParamList = {
  [Routes.Home]: undefined;
  [Routes.Feed]: undefined;
  [Routes.User]: undefined;
  [Routes.Library]: undefined;
};

export type TTabsStackScreenProps<Screen extends keyof TTabsStackParamList> =
  NativeStackScreenProps<TTabsStackParamList, Screen>;

const TabsStack = createBottomTabNavigator<TTabsStackParamList>();

export default function Tabs() {
  // console.log("Tabs");

  const theme = useAppSelector(state => state.settingsReducer.theme);

  const screenOptions = useCallback(
    ({route}: any) => ({
      headerStyle: {
        // backgroundColor: theme.colors.headerBar,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      // headerTintColor: theme.colors.primary,
      headerTitleStyle: {
        fontFamily: "Nunito-Bold",
      },
      headerTitleContainerStyle: {
        marginLeft: 24,
      },
      tabBarActiveTintColor: theme.colors.selected,
      tabBarInactiveTintColor: theme.colors.unselected,
      headerShadowVisible: false,
      tabBarIcon: ({color}: any) => {
        let iconName;

        switch (route.name) {
          case Routes.Home:
            iconName = "home";
            break;
          case Routes.Feed:
            iconName = "bell";
            break;
          case Routes.User:
            iconName = "user";
            break;
          case Routes.Library:
            iconName = "book-open";
            break;
          default:
            iconName = "home";
        }

        return <Icon name={iconName} color={color} size={25} />;
      },
      tabBarLabel: () => null,
      tabBarStyle: [
        {
          borderTopWidth: 0,
          elevation: 0,
          // backgroundColor: theme.colors.headerBar,
        },
      ],
    }),
    [theme],
  );

  return (
    <View style={styles.container}>
      <TabsStack.Navigator screenOptions={screenOptions}>
        <TabsStack.Screen
          name={Routes.Home}
          component={HomePage}
          options={{
            headerShown: false,
          }}
        />
        <TabsStack.Screen
          name={Routes.Feed}
          component={FeedPage}
          options={{
            headerShown: false,
          }}
        />
        <TabsStack.Screen
          name={Routes.User}
          component={UserPage}
          options={{
            headerShown: false,
          }}
        />
        <TabsStack.Screen
          name={Routes.Library}
          component={LibraryNavigator}
          options={{
            headerShown: false,
          }}
        />
      </TabsStack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
