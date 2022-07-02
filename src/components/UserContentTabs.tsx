import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View, Text, StatusBar, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from '../style/Light';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {IComment, IFavorite} from '../types/types';
import CommentHistory from './CommentHistory';
import FavoriteHistory from './FavoriteHistory';

const Tab = createMaterialTopTabNavigator();

function UserContentTabs() {
  const [comments, setComments] = useState<IComment[]>([]);
  const [favorites, setFavorites] = useState<IFavorite[]>([]);

  useEffect(() => {
    const comments: IComment[] = [
      {
        id: 0,
        article: 'Как искать клиентов?',
        date: new Date(),
        text: 'Один из первых моих клиентов был мой друг, которому нужна была моя консультация. Вторым клиентом был уже мой родной брат, он открыл ИП по продаже машин.',
      },
      {
        id: 1,
        article: 'Советы начинающему бухгалтеру',
        date: new Date('07/03/2022'),
        text: 'Спасибо Вам! Блогадаря вашим советам я теперь знаю что делать!!!',
      },
      {
        id: 2,
        article: 'Топ 10 инструметов',
        date: new Date('12/14/2022'),
        text: 'Почему только 10 инструментво?!!!',
      },
      {
        id: 3,
        article: 'Курс Бухгалтер 2022',
        date: new Date('01/02/2022'),
        text: 'Впервые вижу подобный курс! Спасибо!',
      },
      {
        id: 4,
        article: 'Инсайды на 2023 год!',
        date: new Date('10/19/2022'),
        text: 'Насколько верна это инормация?',
      },
    ];

    setComments(comments);

    const favorites: IFavorite[] = [
      {
        id: 0,
        article: 'Советы начинающему бухгалтеру',
        date: new Date(),
        desc: 'Рассказываем самые лучшие советы бухгалтеру, вступившему на тернистый путь бехгалтерии',
        comments: 120,
        favorites: 67,
      },
      {
        id: 1,
        article: 'Как искать клиентов?',
        date: new Date('07/03/2022'),
        desc: 'Что, где, когда искать новых клиентов? Почему один новый лучше двух старых? На каких площадках следует искать?',
        comments: 10,
        favorites: 5,
      },
      {
        id: 2,
        article: 'Топ 10 инструметов',
        date: new Date('12/14/2022'),
        desc: 'Знали ли Вы хотябы 5 лучших инструментов? А мы знаем! И Вам расскажем!',
        comments: 89,
        favorites: 13,
      },
      {
        id: 3,
        article: 'Инсайды на 2023 год!',
        date: new Date('01/02/2022'),
        desc: 'Новости из мира бухгалтерии. На что следует акцентировать внимание, а на что нужно забить.',
        comments: 56,
        favorites: 9,
      },
      {
        id: 4,
        article: 'Курс Бухгалтер 2022',
        date: new Date('10/19/2022'),
        desc: 'Наш новый курс с новыми идеями, секретами и методикам. Ждем Вас здесь и сейчас!',
        comments: 23,
        favorites: 4,
      },
    ];

    setFavorites(favorites);
  }, []);

  const CommentsTab = useCallback(() => {
    return (
      <ScrollView contentContainerStyle={styles.tab_content}>
        {comments.map(comment => (
          <CommentHistory comment={comment} key={comment.id} />
        ))}
      </ScrollView>
    );
  }, [comments]);

  const FavoritesTab = () => {
    return (
      <ScrollView contentContainerStyle={styles.tab_content}>
        {favorites.map(favorite => (
          <FavoriteHistory favorite={favorite} key={favorite.id} />
        ))}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicator: () => null,
          tabBarStyle: {
            elevation: 0,
            backgroundColor: 'transparent',
          },
          tabBarPressColor: 'transparent',
        }}>
        <Tab.Screen
          name="Comments"
          component={CommentsTab}
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={[
                  styles.label,
                  {color: focused ? 'black' : '#85858599'},
                ]}>
                Комментарии
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesTab}
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={[
                  styles.label,
                  {color: focused ? 'black' : '#85858599'},
                ]}>
                Нравится
              </Text>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

export default React.memo(UserContentTabs);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  label: {
    ...Style.font_bold,
    fontSize: 16,
  },
  tab_content: {
    paddingEnd: 20,
    paddingStart: 20,
  },
});
