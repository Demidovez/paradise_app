import React, {useMemo} from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Routes} from './routes';
import {useAppSelector} from '../hooks';
import {Selectors} from '../redux/selectors/selectors';

export type TAnothersStackParamList = {
  [Routes.TestFullPage]: {template: any};
};

export type TAnothersStackScreenProps<
  Screen extends keyof TAnothersStackParamList,
> = NativeStackScreenProps<TAnothersStackParamList, Screen>;

const AnothersStack = createNativeStackNavigator<TAnothersStackParamList>();

export default function Anothers() {
  // console.log("Anothers");

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

  return (
    <View style={style}>
      <AnothersStack.Navigator screenOptions={options}>
        <AnothersStack.Screen name={Routes.TestFullPage} component={View} />
      </AnothersStack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
