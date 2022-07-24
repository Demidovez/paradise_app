import React, {useCallback} from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  FlatList,
  ActivityIndicator,
  ListRenderItem,
} from "react-native";
import {TLibraryStackScreenProps} from "../navigation/libraryNavigator";
import {Routes} from "../navigation/routes";
import {IMaterial} from "../types/types";
import MaterialCard from "../components/MaterialCard";
import TitleBar from "../components/Titlebar";
import {useGetMaterialsQuery} from "../store/api/MaterialsService";

function MaterialCategory(
  props: TLibraryStackScreenProps<Routes.MaterialCategory>,
) {
  const {category} = props.route.params;

  const {data: materials, isFetching} = useGetMaterialsQuery(category.id, {
    refetchOnMountOrArgChange: true,
  });

  const renderItem: ListRenderItem<IMaterial> = useCallback(
    ({item, index}) => (
      <View
        style={[
          styles.item,
          materials?.length === index + 1 && {paddingBottom: 30},
        ]}>
        <MaterialCard material={item} />
      </View>
    ),
    [materials],
  );

  return (
    <View style={styles.container}>
      <TitleBar title={category.title} />
      {isFetching ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={"#a1a0a0"} />
        </View>
      ) : (
        <FlatList
          data={materials}
          renderItem={renderItem}
          keyExtractor={item => "" + item.id}
          style={styles.list}
        />
      )}
    </View>
  );
}

export default React.memo(MaterialCategory);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f3f5DD",
    paddingTop: StatusBar.currentHeight || 0,
  },
  item: {
    paddingStart: 20,
    paddingEnd: 20,
    paddingBottom: 20,
  },
  loader: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    transform: [{scale: 1.5}],
  },
  list: {
    paddingTop: 5,
  },
});
