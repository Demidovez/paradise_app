import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Style from '../style/Light';
import Icon from 'react-native-vector-icons/Entypo';

interface IList {
  title: string;
  icon: string;
  color: string;
  colorIcon: string;
}

function ListClubFeatures() {
  const [list, setList] = useState<IList[]>([]);

  useEffect(() => {
    setList([
      {
        title: 'Материалы',
        icon: 'book',
        color: '#eefcef',
        colorIcon: '#2D8A33',
      },
      {
        title: 'Статьи',
        icon: 'documents',
        color: '#e6f5f9',
        colorIcon: '#2C8097',
      },
      {
        title: 'Новости',
        icon: 'news',
        color: '#f4f5f9',
        colorIcon: '#576BBB',
      },
      {
        title: 'Тесты',
        icon: 'graduation-cap',
        color: '#ffeee1',
        colorIcon: '#A86B3D',
      },
      {
        title: 'Видео',
        icon: 'tv',
        color: '#f9f8f2',
        colorIcon: '#9A8A2E',
      },
      {
        title: 'Чат',
        icon: 'message',
        color: '#f1e7ff',
        colorIcon: '#7245B1',
      },
    ]);
  }, []);

  const renderItem = ({item, index}: {item: IList; index: number}) => (
    <View style={[styles.list_item, {paddingStart: index ? 0 : 20}]}>
      <View style={[styles.card, {backgroundColor: item.color}]}>
        <Icon name={item.icon} color={item.colorIcon} size={30} />
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
    marginBottom: 10,
  },
  list_item: {
    paddingEnd: 24,
    alignItems: 'center',
  },
  card: {
    minWidth: 80,
    minHeight: 80,
    borderRadius: 20,
    marginTop: 5,
    backgroundColor: '#AD8C5B22',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...Style.font_bold,
    fontSize: 12,
    marginTop: 5,
  },
});
