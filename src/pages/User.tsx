import React from 'react';
import {StyleSheet, View, Text, StatusBar, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from '../style/Light';

function LibraryPage() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.account}>
        <View style={styles.user}>
          <Icon name={'user-o'} color={'black'} size={60} />
        </View>
        <View style={styles.profile}>
          <Text style={styles.name}>Демидовец Николай Михайлович</Text>
          <Text style={styles.email}>nikolaydemidovez@gmail.com</Text>
          <Text style={styles.status}>Членство оформлено</Text>

          <View style={styles.controls}>
            <Icon
              name={'edit'}
              color={'black'}
              size={30}
              style={styles.control}
            />
            <Icon
              name={'gear'}
              color={'black'}
              size={30}
              style={styles.control}
            />
            <Icon
              name={'sign-out'}
              color={'black'}
              size={30}
              style={styles.control}
            />
          </View>
        </View>
      </View>
      <View style={styles.subscribe}>
        <Icon
          name={'trophy'}
          color={'#1FBE91'}
          size={30}
          style={styles.control}
        />
        <Text style={styles.label_subscribe}>Членство в клубе</Text>
      </View>
    </ScrollView>
  );
}

export default React.memo(LibraryPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  account: {
    flex: 1,
    marginStart: 20,
    marginEnd: 20,
    marginBottom: 10,
    flexDirection: 'row',
    // backgroundColor: 'gray',
  },
  user: {
    backgroundColor: '#E9E9E9',
    padding: 20,
    width: 120,
    height: 120,
    borderRadius: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 20,
  },
  profile: {width: 0, flexGrow: 1},
  name: {
    ...Style.font_bold,
    fontSize: 16,
  },
  email: {
    ...Style.font,
    fontSize: 13,
    marginTop: 5,
    opacity: 0.6,
  },
  status: {
    ...Style.font,
    fontSize: 12,
    marginTop: 5,
    opacity: 1,
    color: '#1FBE91',
  },
  controls: {flexDirection: 'row', marginStart: -15},
  control: {
    padding: 15,
  },
  subscribe: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#55efc444',
    marginStart: 20,
    marginEnd: 20,
    borderRadius: 20,
  },
  label_subscribe: {
    ...Style.font_bold,
    fontSize: 20,
    color: '#1FBE91',
  },
});
