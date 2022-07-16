import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import Style from '../style/Light';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

interface IProps {
  title?: string;
}

function TitleBar({title}: IProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View
          style={[
            styles.icon_wrapper,
            {backgroundColor: title ? 'transparent' : '#ECECEC'},
          ]}>
          <Icon
            name="chevron-left"
            color="#000000"
            size={30}
            style={styles.arrow}
          />
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default React.memo(TitleBar);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingEnd: 20,
    paddingTop: 3,
    alignItems: 'center',
    marginBottom: 10,
  },
  arrow: {},
  title: {
    ...Style.font_bold,
    fontSize: 22,
  },
  icon_wrapper: {
    marginStart: 20,
    marginEnd: 10,
    paddingTop: 2,
    borderRadius: 10,
  },
});
