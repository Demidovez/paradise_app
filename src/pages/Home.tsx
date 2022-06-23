import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import ListClubFeatures from '../components/ListClubFeatures';
import ListFreeLibrary from '../components/ListFreeLibrary';
import ListPaydLibrary from '../components/ListPaydLibrary';
import Style from '../style/Light';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

function HomePage() {
  return (
    <View style={styles.container}>
      <View style={styles.settings}>
        <Icon name="bell" color="#505050" size={30} style={styles.icon} />
        <Icon name="settings" color="#505050" size={30} style={styles.icon} />
      </View>
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
      {/* <Button title="Чат в телеграм" />
      <Button title="Инстаграм" />
      <Text>Публичная оферта</Text>
      <Text>Политика конфиденциальности</Text> */}
    </View>
  );
}

export default React.memo(HomePage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  settings: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: StatusBar.currentHeight || 0,
    paddingEnd: 10,
  },
  icon: {
    padding: 15,
    paddingTop: 10,
  },
  logoWrapper: {
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 60,
    paddingTop: 80,
  },
  logo: {
    width: '70%',
    resizeMode: 'contain',
    height: undefined,
    aspectRatio: 2.3,
  },
  h1: {
    ...Style.font_bold,
    fontSize: 22,
    paddingBottom: 20,
    paddingStart: 20,
    paddingEnd: 20,
  },
  h2: {
    ...Style.font_bold,
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingStart: 20,
    paddingEnd: 20,
  },
});
