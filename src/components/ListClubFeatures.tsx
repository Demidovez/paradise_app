import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import SvgImage from './SvgImage';
import Style from '../style/Light';
import Icon from 'react-native-vector-icons/AntDesign';

interface IList {
  title: string;
  icon: string;
  color: string;
}

function ListClubFeatures() {
  const [list, setList] = useState<IList[]>([]);

  useEffect(() => {
    setList([
      {
        title: 'Материалы',
        icon: 'database',
        color: '#00b894',
      },
      {
        title: 'Статьи',
        icon: 'contacts',
        color: '#6c5ce7',
      },
      {
        title: 'Новости',
        icon: 'database',
        color: '#00b894',
      },
      {
        title: 'Тесты',
        icon: 'database',
        color: '#00b894',
      },
      {
        title: 'Видео',
        icon: 'database',
        color: '#00b894',
      },
      {
        title: 'Чат',
        icon: 'database',
        color: '#00b894',
      },
    ]);
  }, []);

  const renderItem = ({item, index}: {item: IList; index: number}) => (
    <View style={[styles.list_item, {paddingStart: index ? 0 : 20}]}>
      <View style={[styles.card]}>
        <Icon name={item.icon} color={item.color} size={30} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        horizontal
        renderItem={renderItem}
        keyExtractor={item => item.title}
        overScrollMode={'never'}
      />
    </View>
  );
}

export default ListClubFeatures;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginBottom: 20,
  },
  list_item: {
    // flex: 1,
    paddingEnd: 24,
    alignItems: 'center',
  },
  card: {
    minWidth: 80,
    minHeight: 80,
    borderRadius: 20,
    backgroundColor: '#edededAA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...Style.font,
    fontSize: 12,
    marginTop: 5,
  },
});
