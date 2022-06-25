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

function ListPaydLibrary() {
  const [list, setList] = useState<IList[]>([]);

  useEffect(() => {
    setList([
      {
        title: 'ТОП 20 Инструментов',
        desc: 'Как упростить работу бухгалтера',
        icon: 'tools',
      },
      {
        title: 'Курс Бухгалтер 2022',
        desc: '30 дней структурированной информации',
        icon: 'trophy',
      },
      {
        title: 'Инсайды на 2023 год!',
        desc: 'Что нужно знать уже сейчас',
        icon: 'suitcase',
      },
      {
        title: 'Как искать клиентов?',
        desc: 'Расскажем и покажем способы, которые Вам помогут найти новых клиентов',
        icon: 'add-user',
      },
      {
        title: 'Бух. лайфхаки',
        desc: 'Какие хитрости упростят Вам работу',
        icon: 'rocket',
      },
      {
        title: 'Увеличиваем доход',
        desc: 'Обсудим шаги, которые Вы даже не знали',
        icon: 'wallet',
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

export default ListPaydLibrary;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingStart: 20,
    paddingEnd: 20,
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
