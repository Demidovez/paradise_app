import React, {useEffect, useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  ScrollView,
} from "react-native";
import {TLibraryStackScreenProps} from "../navigation/libraryNavigator";
import {Routes} from "../navigation/routes";
import Style from "../style/Light";
import {IMaterial} from "../types/types";
import MaterialCard from "../components/MaterialCard";
import TitleBar from "../components/Titlebar";
import ContentJSON from "../components/ContentJSON";
import Comments from "../components/Comments";

function Material(props: TLibraryStackScreenProps<Routes.MaterialPage>) {
  const {id} = props.route.params;

  const [data, setData] = useState({id: id});

  return (
    <ScrollView style={styles.container}>
      <TitleBar />
      <Text style={styles.title}>Топ 10 инструментов</Text>
      <View style={styles.content}>
        <ContentJSON data={data} />
      </View>
      <Comments />
    </ScrollView>
  );
}

export default React.memo(Material);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    //
  },
  title: {
    ...Style.font_bold,
    fontSize: 22,
    paddingStart: 20,
    paddingEnd: 20,
  },
  content: {
    padding: 20,
    // flex: 1,
    // marginBottom: 20,
  },
});
