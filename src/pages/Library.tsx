import React, {useEffect, useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import SearchMaterials from "../components/SearchMaterials";
import {Routes} from "../navigation/routes";
import Style from "../style/Light";
import * as RootNavigation from "../navigation/rootNavigation";
import {IMaterialCategory} from "../types/types";

function LibraryPage() {
  const [categories, setCategories] = useState<IMaterialCategory[]>([]);

  useEffect(() => {
    setCategories([
      {
        title: "Статьи",
        icon: "📑",
        color: "#e6f5f9",
      },
      {
        title: "Новости",
        icon: "📰",
        color: "#f4f5f9",
      },
      {
        title: "Уроки",
        icon: "📕",
        color: "#f1e7ff",
      },
      {
        title: "Тесты",
        icon: "💻",
        color: "#ffeee1",
      },
      {
        title: "Видео",
        icon: "🎥",
        color: "#f9f8f2",
      },
      {
        title: "Опросы",
        icon: "📣",
        color: "#F4FFD2",
      },
      {
        title: "Курсы",
        icon: "🎓",
        color: "#FFCFD7",
      },
      {
        title: "Калькуляторы",
        icon: "🧮",
        color: "#FFF3D0",
      },
      {
        title: "Прочее",
        icon: "🚀",
        color: "#eefcef",
      },
    ]);
  }, []);

  const goToCategory = (category: IMaterialCategory) => {
    RootNavigation.navigate(Routes.Library, {
      screen: Routes.MaterialCategory,
      params: {category},
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.h1}>Материалы клуба</Text>
      <SearchMaterials />
      <View style={styles.materials}>
        {categories.map(category => (
          <TouchableOpacity
            key={category.title}
            style={styles.material_card}
            onPress={() => goToCategory(category)}>
            <View
              style={[
                styles.background_card,
                {backgroundColor: category.color},
              ]}>
              <Text style={styles.icon}>{category.icon}</Text>
            </View>
            <Text style={styles.title}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

export default React.memo(LibraryPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
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
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "stretch",
    marginStart: -10,
    marginEnd: -10,
    marginTop: 10,
  },
  material_card: {
    marginTop: 20,
    width: "33.3%",
  },
  background_card: {
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    marginStart: 10,
    marginEnd: 10,
    borderRadius: 15,
  },
  title: {
    ...Style.font_bold,
    fontSize: 14,
    paddingTop: 5,
    textAlign: "center",
  },
  icon: {
    fontSize: 30,
    color: "#000000",
  },
});
