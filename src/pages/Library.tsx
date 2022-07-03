import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, StatusBar, ScrollView} from 'react-native';
import SearchMaterials from '../components/SearchMaterials';
import Style from '../style/Light';

interface IMaterial {
  title: string;
  icon: string;
  color: string;
}

function LibraryPage() {
  const [materials, setMaterials] = useState<IMaterial[]>([]);

  useEffect(() => {
    setMaterials([
      {
        title: 'Материалы',
        icon: '🚀',
        color: '#eefcef',
      },
      {
        title: 'Статьи',
        icon: '📑',
        color: '#e6f5f9',
      },
      {
        title: 'Новости',
        icon: '📰',
        color: '#f4f5f9',
      },
      {
        title: 'Уроки',
        icon: '📕',
        color: '#f1e7ff',
      },
      {
        title: 'Тесты',
        icon: '💻',
        color: '#ffeee1',
      },
      {
        title: 'Видео',
        icon: '🎥',
        color: '#f9f8f2',
      },
      {
        title: 'Опросы',
        icon: '📣',
        color: '#F4FFD2',
      },
      {
        title: 'Курсы',
        icon: '🎓',
        color: '#FFCFD7',
      },
      {
        title: 'Калькуляторы',
        icon: '🧮',
        color: '#FFF3D0',
      },
    ]);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.h1}>Материалы клуба</Text>
      <SearchMaterials />
      <View style={styles.materials}>
        {materials.map(material => (
          <View key={material.title} style={styles.material_card}>
            <View
              style={[
                styles.background_card,
                {backgroundColor: material.color},
              ]}>
              <Text style={styles.icon}>{material.icon}</Text>
            </View>
            <Text style={styles.title}>{material.title}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default React.memo(LibraryPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: StatusBar.currentHeight || 0,
    padding: 20,
    paddingTop: 0,
  },
  h1: {
    ...Style.font_bold,
    fontSize: 22,
    paddingTop: 5,
    paddingBottom: 20,
  },
  materials: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    marginStart: -10,
    marginEnd: -10,
    marginTop: 10,
  },
  material_card: {
    marginTop: 20,
    width: '33.3%',
  },
  background_card: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 10,
    marginEnd: 10,
    borderRadius: 15,
  },
  title: {
    ...Style.font_bold,
    fontSize: 14,
    paddingTop: 5,
    textAlign: 'center',
  },
  icon: {
    fontSize: 30,
    color: '#000000',
  },
});
