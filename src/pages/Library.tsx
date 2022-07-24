import React, {useEffect, useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import SearchMaterials from "../components/SearchMaterials";
import {Routes} from "../navigation/routes";
import Style from "../style/Light";
import * as RootNavigation from "../navigation/rootNavigation";
import {IMaterialCategory} from "../types/types";
import MaterialCategoryCard from "../components/MaterialCategoryCard";
import {useGetCategoriesQuery} from "../store/api/MaterialsService";

function LibraryPage() {
  const {data: categories, isLoading} = useGetCategoriesQuery();

  const goToCategory = (category: IMaterialCategory) => {
    RootNavigation.navigate(Routes.Library, {
      screen: Routes.MaterialCategory,
      params: {category},
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Материалы клуба</Text>
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={"#a1a0a0"} />
        </View>
      ) : (
        <ScrollView>
          <SearchMaterials />
          <View style={styles.materials}>
            {categories?.map(category => (
              <MaterialCategoryCard
                category={category}
                onPress={goToCategory}
                key={category.title}
              />
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}

export default React.memo(LibraryPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    paddingTop: StatusBar.currentHeight || 0,
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
  loader: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    transform: [{scale: 1.5}],
  },
});
