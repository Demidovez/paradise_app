import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from '../style/Light';
import {IFavorite} from '../types/types';
import moment from 'moment';

interface IProps {
  favorite: IFavorite;
}

function FavoriteHistory({favorite}: IProps) {
  const [isFavorite, setIsFavorite] = useState(true);

  const [commentsCount] = useState(favorite.comments);
  const [favoritesCount, setFavoritesCount] = useState(favorite.favorites);

  const onSetFavorite = () => {
    setIsFavorite(!isFavorite);
    setFavoritesCount(isFavorite ? favoritesCount - 1 : favoritesCount + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.article}>{favorite.article}</Text>
        <Text style={styles.date}>{moment(favorite.date).format('LL')}</Text>
        <View style={styles.separator} />
        <View style={styles.content}>
          <Text style={styles.text}>{favorite.desc}...</Text>
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
    </View>
  );
}

export default React.memo(FavoriteHistory);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,

    marginBottom: 20,
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
