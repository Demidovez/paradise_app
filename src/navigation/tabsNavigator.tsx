import React from 'react';
import {useAppSelector} from '../hooks';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import HomePage from '../pages/Home';
import UserPage from '../pages/User';
import EventsPage from '../pages/Events';
import LibraryPage from '../pages/Library';
import SvgHome from '../../assets/icons/templates.svg';
import SvgEvents from '../../assets/icons/projects.svg';
import SvgUser from '../../assets/icons/settings.svg';
import SvgLibrary from '../../assets/icons/settings.svg';
import {Routes} from './routes';
import {Selectors} from '../redux/selectors/selectors';
import {useMemo} from 'react';

export type TTabsStackParamList = {
  [Routes.Home]: undefined;
  [Routes.Events]: undefined;
  [Routes.User]: undefined;
  [Routes.Library]: undefined;
};

export type TTabsStackScreenProps<Screen extends keyof TTabsStackParamList> =
  NativeStackScreenProps<TTabsStackParamList, Screen>;

const TabsStack = createBottomTabNavigator<TTabsStackParamList>();

export default function Tabs() {
  // console.log("Tabs");

  const theme = useAppSelector(Selectors.getTheme);

  const screenOptions = useMemo(
    () => ({
      headerStyle: {
        backgroundColor: theme.colors.headerBar,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: theme.colors.primary,
      headerTitleStyle: {
        fontFamily: 'Nunito-Bold',
      },
      headerTitleContainerStyle: {
        marginLeft: 24,
      },
      tabBarActiveTintColor: theme.colors.selected,
      tabBarInactiveTintColor: theme.colors.unSelected,
      headerShadowVisible: false,
      tabBarLabel: () => null,
      tabBarStyle: [
        {
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: theme.colors.headerBar,
        },
      ],
    }),
    [theme],
  );

  const optionsHome = useMemo(
    () => ({
      title: 'Главная',
      headerShown: false,
      tabBarIcon: ({color, size}: any) => (
        <SvgHome width={size} height={size} fill={color} />
      ),
    }),
    [],
  );

  const optionsEvents = useMemo(
    () => ({
      title: 'События',
      tabBarIcon: ({color, size}: any) => (
        <SvgEvents width={size} height={size} fill={color} />
      ),
    }),
    [],
  );

  const optionsUser = useMemo(
    () => ({
      title: 'Пользователь',
      tabBarIcon: ({color, size}: any) => (
        <SvgUser width={size} height={size} fill={color} />
      ),
    }),
    [],
  );

  const optionsLibrary = useMemo(
    () => ({
      title: 'Материалы',
      tabBarIcon: ({color, size}: any) => (
        <SvgLibrary width={size} height={size} fill={color} />
      ),
    }),
    [],
  );

  return (
    <View style={styles.container}>
      <TabsStack.Navigator screenOptions={screenOptions}>
        <TabsStack.Screen
          name={Routes.Home}
          component={HomePage}
          options={optionsHome}
        />
        <TabsStack.Screen
          name={Routes.Events}
          component={EventsPage}
          options={optionsEvents}
        />
        <TabsStack.Screen
          name={Routes.User}
          component={UserPage}
          options={optionsUser}
        />
        <TabsStack.Screen
          name={Routes.Library}
          component={LibraryPage}
          options={optionsLibrary}
        />
      </TabsStack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
