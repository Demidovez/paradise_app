import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import SvgImage from './SvgImage';
import Style from '../style/Light';

interface IList {
  title: string;
}

function ListFreeLibrary() {
  const [list, setList] = useState<IList[]>([]);

  useEffect(() => {
    setList([
      {
        title: 'Материалы',
      },
      {
        title: 'Статьи',
      },
      {
        title: 'Новости',
      },
      {
        title: 'Тесты',
      },
      {
        title: 'Видео',
      },
      {
        title: 'Чат',
      },
    ]);
  }, []);

  const renderItem = ({item}: {item: IList; index: number}) => (
    <View style={[styles.list_item]}>
      <View style={[styles.card]}>
        <SvgImage width="35px" height="35px" name="close" fill={'black'} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        overScrollMode={'never'}
      />
    </View>
  );
}

export default ListFreeLibrary;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingStart: 20,
  },
  list_item: {
    // flex: 1,
    paddingEnd: 24,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
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
    fontSize: 20,
    paddingStart: 20,
  },
});
