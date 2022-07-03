import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import ListClubFeatures from '../components/ListClubFeatures';
import ListFreeLibrary from '../components/ListFreeLibrary';
import ListPaydLibrary from '../components/ListPaydLibrary';
import Style from '../style/Light';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Emoji from 'react-native-emoji';
import SocialButtons from '../components/SocialButtons';

function HomePage() {
  return (
    <ScrollView style={styles.container}>
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
      <View style={styles.h2_wrapper}>
        <Emoji name="gift" style={{fontSize: 25}} />
        <Text style={styles.h2}>Бесплатно</Text>
      </View>
      <ListFreeLibrary />
      <View style={styles.h2_wrapper}>
        <Emoji name="trophy" style={{fontSize: 25}} />
        <Text style={styles.h2}>По подписке</Text>
      </View>
      <ListPaydLibrary />
      <View style={styles.h2_wrapper}>
        <Emoji name="wave" style={{fontSize: 25}} />
        <Text style={styles.h2}>Подпишись</Text>
      </View>
      <SocialButtons />
      <Text style={styles.link}>Публичная оферта</Text>
      <Text style={styles.link}>Политика конфиденциальности</Text>
    </ScrollView>
  );
}

export default React.memo(HomePage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f3f5DD',
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
  h2_wrapper: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingStart: 20,
    paddingEnd: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  h2: {
    ...Style.font_bold,
    fontSize: 20,
    paddingStart: 15,
  },
  link: {
    ...Style.font,
    fontSize: 13,
    opacity: 0.5,
    paddingStart: 20,
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
});
