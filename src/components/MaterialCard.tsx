import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from '../style/Light';
import {IMaterial} from '../types/types';
import moment from 'moment';
import * as RootNavigation from '../navigation/rootNavigation';
import {Routes} from '../navigation/routes';

interface IProps {
  material: IMaterial;
}

function MaterialCard({material}: IProps) {
  const [isFavorite, setIsFavorite] = useState(true);

  const [commentsCount] = useState(material.comments);
  const [favoritesCount, setFavoritesCount] = useState(material.favorites);

  const onSetFavorite = () => {
    setIsFavorite(!isFavorite);
    setFavoritesCount(isFavorite ? favoritesCount - 1 : favoritesCount + 1);
  };

  const goToCategory = () => {
    RootNavigation.navigate(Routes.Library, {
      screen: Routes.MaterialPage,
      params: {id: material.id},
    });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={goToCategory}
      activeOpacity={0.6}>
      <View style={styles.wrapper}>
        <Text style={styles.article}>{material.title}</Text>
        <Text style={styles.date}>{moment(material.date).format('LL')}</Text>
        <View style={styles.separator} />
        <View style={styles.content}>
          <Text style={styles.text}>{material.desc}...</Text>
        </View>
      </View>
      <View style={styles.icons}>
        <View style={styles.icon}>
          <Icon name={'comment-o'} color={'#00000055'} size={25} />
          <Text style={styles.icon_count}>{commentsCount}</Text>
        </View>
        <TouchableOpacity style={styles.icon} onPress={onSetFavorite}>
          <Text style={styles.icon_count}>{favoritesCount}</Text>
          {isFavorite ? (
            <Icon name={'heart'} color={'#d63031'} size={25} />
          ) : (
            <Icon name={'heart-o'} color={'#00000055'} size={25} />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(MaterialCard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: 'white',
    elevation: 20,
    shadowColor: '#D4D4D4',
  },
  wrapper: {
    padding: 15,
    paddingBottom: 0,
  },
  article: {
    ...Style.font_bold,
    opacity: 0.8,
    fontSize: 16,
  },
  date: {
    ...Style.font,
    fontSize: 12,
    color: 'gray',
  },
  separator: {
    borderBottomColor: '#00000011',
    borderWidth: 0,
    borderBottomWidth: 1,
    marginTop: 10,
  },
  content: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  text: {
    ...Style.font,
    fontSize: 14,
    width: 0,
    flexGrow: 1,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 15,
    paddingTop: 15,
  },
  icon_count: {
    ...Style.font,
    fontSize: 12,
    color: 'gray',
    marginStart: 10,
    marginEnd: 10,
  },
});
