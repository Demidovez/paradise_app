import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, StatusBar, FlatList} from 'react-native';
import {TLibraryStackScreenProps} from '../navigation/libraryNavigator';
import {Routes} from '../navigation/routes';
import Style from '../style/Light';
import {IMaterial} from '../types/types';
import MaterialCard from '../components/MaterialCard';
import TitleBar from '../components/Titlebar';

function MaterialCategory(
  props: TLibraryStackScreenProps<Routes.MaterialCategory>,
) {
  const {category} = props.route.params;

  const renderItem = ({item}: any) => (
    <View style={styles.item}>
      <MaterialCard material={item} />
    </View>
  );

  const [materials, setMaterials] = useState<IMaterial[]>([]);

  useEffect(() => {
    setMaterials([
      {
        id: 0,
        title: 'Советы начинающему бухгалтеру',
        date: new Date(),
        desc: 'Рассказываем самые лучшие советы бухгалтеру, вступившему на тернистый путь бехгалтерии',
        comments: 120,
        favorites: 67,
      },
      {
        id: 1,
        title: 'Как искать клиентов?',
        date: new Date('07/03/2022'),
        desc: 'Что, где, когда искать новых клиентов? Почему один новый лучше двух старых? На каких площадках следует искать?',
        comments: 10,
        favorites: 5,
      },
      {
        id: 2,
        title: 'Топ 10 инструметов',
        date: new Date('12/14/2022'),
        desc: 'Знали ли Вы хотябы 5 лучших инструментов? А мы знаем! И Вам расскажем!',
        comments: 89,
        favorites: 13,
      },
      {
        id: 3,
        title: 'Инсайды на 2023 год!',
        date: new Date('01/02/2022'),
        desc: 'Новости из мира бухгалтерии. На что следует акцентировать внимание, а на что нужно забить.',
        comments: 56,
        favorites: 9,
      },
      {
        id: 4,
        title: 'Курс Бухгалтер 2022',
        date: new Date('10/19/2022'),
        desc: 'Наш новый курс с новыми идеями, секретами и методикам. Ждем Вас здесь и сейчас!',
        comments: 23,
        favorites: 4,
      },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <TitleBar title={category.title} />
      <FlatList
        data={materials}
        renderItem={renderItem}
        keyExtractor={item => '' + item.id}
      />
    </View>
  );
}

export default React.memo(MaterialCategory);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f3f5DD',
  },
  item: {
    paddingStart: 20,
    paddingEnd: 20,
    paddingBottom: 20,
  },
});
