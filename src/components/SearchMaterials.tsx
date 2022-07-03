import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Style from '../style/Light';
import Icon from 'react-native-vector-icons/AntDesign';

function SearchMaterials() {
  const [text, setText] = useState('');

  const onChangeText = (text: any) => {
    setText(text);
  };

  const onResetText = () => {
    setText('');
  };

  return (
    <View style={styles.container}>
      <Icon name="search1" color="#505050" size={23} style={styles.icon} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Поиск..."
        selectionColor="#959595"
      />
      {text !== '' && (
        <TouchableOpacity style={styles.icon_wrapper} onPress={onResetText}>
          <Icon name="close" color="#505050" size={25} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default React.memo(SearchMaterials);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f3f5',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    ...Style.font,
    fontSize: 15,
    marginStart: -5,
    marginEnd: -5,
  },
  icon: {
    padding: 15,
    paddingBottom: 0,
    paddingTop: 0,
    opacity: 0.5,
  },
  icon_wrapper: {},
});
