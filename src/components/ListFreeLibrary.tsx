import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import SvgImage from './SvgImage';
import Style from '../style/Light';
import Icon from 'react-native-vector-icons/Entypo';

interface IList {
  title: string;
  desc: string;
  icon: string;
}

function ListFreeLibrary() {
  const [list, setList] = useState<IList[]>([]);

  useEffect(() => {
    setList([
      {
        title: 'Статьи',
        desc: 'Самые интересные статьи обо всём и всем',
        icon: 'browser',
      },
      {
        title: 'Нормативы',
        desc: 'Что говорит нам закон',
        icon: 'text',
      },
      {
        title: 'Бух учет',
        desc: 'Бухгалтерский учет от А до Я',
        icon: 'newsletter',
      },
      {
        title: 'Памятки',
        desc: 'Напоминаем, что нужно делать если...',
        icon: 'open-book',
      },
      {
        title: 'Инструкции',
        desc: 'Пошагово показываем, что и как делать',
        icon: 'list',
      },
      {
        title: 'Популярные вопросы',
        desc: 'Отвечаем на самые главные вопросы',
        icon: 'help',
      },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      {list.map(item => (
        <View style={styles.list_item} key={item.title}>
          <View style={[styles.card]}>
            <Icon name={item.icon} color={'black'} size={30} />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

export default ListFreeLibrary;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingStart: 20,
    paddingEnd: 20,
  },
  list_item: {
    // flex: 1,
    // paddingEnd: 24,
    padding: 14,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 20,
    shadowColor: '#D4D4D4',
  },
  card: {
    minWidth: 60,
    minHeight: 60,
    borderRadius: 100,
    backgroundColor: '#edededAA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {width: 0, flexGrow: 1},
  title: {
    ...Style.font,
    fontSize: 20,
    paddingStart: 20,
  },
  desc: {
    ...Style.font,
    fontSize: 13,
    paddingStart: 20,
    paddingBottom: 5,
    opacity: 0.5,
  },
});
