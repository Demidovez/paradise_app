import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Routes} from './routes';
import {useMemo} from 'react';

export type TModalsStackParamList = {
  [Routes.ModalPicker]: undefined;
};

export type TModalsStackScreenProps<
  Screen extends keyof TModalsStackParamList,
> = NativeStackScreenProps<TModalsStackParamList, Screen>;

const ModalsStack = createNativeStackNavigator<TModalsStackParamList>();

export default function Modals() {
  // console.log("Modals");

  const options = useMemo(
    () => ({
      headerShown: false,
    }),
    [],
  );

  return (
    <View style={styles.container}>
      <ModalsStack.Navigator screenOptions={options}>
        <ModalsStack.Screen name={Routes.ModalPicker} component={View} />
      </ModalsStack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
