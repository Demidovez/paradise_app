import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Style from '../style/Light';
import Emoji from 'react-native-emoji';

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
        icon: 'hammer_and_wrench',
      },
      {
        title: 'Курс Бухгалтер 2022',
        desc: '30 дней структурированной информации',
        icon: 'crown',
      },
      {
        title: 'Инсайды на 2023 год!',
        desc: 'Что нужно знать уже сейчас',
        icon: 'newspaper',
      },
      {
        title: 'Как искать клиентов?',
        desc: 'Расскажем и покажем способы, которые Вам помогут найти новых клиентов',
        icon: 'man-boy-boy',
      },
      {
        title: 'Бух. лайфхаки',
        desc: 'Какие хитрости упростят Вам работу',
        icon: 'brain',
      },
      {
        title: 'Увеличиваем доход',
        desc: 'Обсудим шаги, которые Вы даже не знали',
        icon: 'moneybag',
      },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      {list.map(item => (
        <View style={styles.list_item} key={item.title}>
          <View style={[styles.card]}>
            <Emoji name={item.icon} style={{fontSize: 20}} />
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#edededAA',
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
