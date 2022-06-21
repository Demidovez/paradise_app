import React from 'react';
import {StyleSheet, View, Text, Image, Button, Dimensions} from 'react-native';
import ListClubFeatures from '../components/ListClubFeatures';
import ListFreeLibrary from '../components/ListFreeLibrary';
import ListPaydLibrary from '../components/ListPaydLibrary';
import Style from '../style/Light';

function HomePage() {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.h1}>Клуб Финансового Рая</Text>
      <ListClubFeatures />
      <Text style={styles.h2}>Бесплатно</Text>
      <ListFreeLibrary />
      <Text style={styles.h2}>По подписке</Text>
      <ListPaydLibrary />
      <Text style={styles.h2}>Подпишись</Text>
      <Button title="Чат в телеграм" />
      <Button title="Инстаграм" />
      <Text>Публичная оферта</Text>
      <Text>Политика конфиденциальности</Text>
    </View>
  );
}

export default React.memo(HomePage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf0f5',
    paddingStart: 12,
    paddingEnd: 12,
  },
  logoWrapper: {
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
    paddingTop: 40,
  },
  logo: {
    width: '70%',
    resizeMode: 'contain',
    height: undefined,
    aspectRatio: 2.3,
  },
  h1: {
    ...Style.font_bold,
    fontSize: 19,
    paddingBottom: 12,
  },
  h2: {
    ...Style.font_bold,
    fontSize: 16,
    paddingTop: 12,
    paddingBottom: 12,
  },
});
