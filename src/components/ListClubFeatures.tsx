import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import SvgImage from './SvgImage';

interface IList {
  title: string;
}

function ListClubFeatures() {
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
        title: 'Калькуляторы',
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

  const renderItem = ({item}: any) => (
    <View>
      <View style={styles.card}>
        <SvgImage width="50px" height="50px" name="close" />
      </View>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />
  );
}

export default ListClubFeatures;

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 100,
    backgroundColor: 'gray',
  },
});
