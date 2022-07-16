import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native';
import {TLibraryStackScreenProps} from '../navigation/libraryNavigator';
import {Routes} from '../navigation/routes';
import Style from '../style/Light';
import {IMaterial} from '../types/types';
import MaterialCard from '../components/MaterialCard';
import TitleBar from '../components/Titlebar';
import ContentJSON from '../components/ContentJSON';

function Comments() {
  return (
    <View style={styles.container}>
      <Text>Комментарии</Text>
    </View>
  );
}

export default React.memo(Comments);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
