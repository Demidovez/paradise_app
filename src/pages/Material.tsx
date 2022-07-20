import React, {useState} from "react";
import {StyleSheet, View, Text, StatusBar, ScrollView} from "react-native";
import {TLibraryStackScreenProps} from "../navigation/libraryNavigator";
import {Routes} from "../navigation/routes";
import Style from "../style/Light";
import TitleBar from "../components/Titlebar";
import ContentJSON from "../components/ContentJSON";
import MaterialComments from "../components/MaterialComments";
import CounterLikesAndComments from "../components/CounterLikesAndComments";

function Material(props: TLibraryStackScreenProps<Routes.MaterialPage>) {
  const {id} = props.route.params;

  const [data, setData] = useState({id: id});

  return (
    <View style={styles.container}>
      <ScrollView>
        <TitleBar />
        <Text style={styles.title}>Топ 10 инструментов</Text>
        <View style={styles.content}>
          <ContentJSON data={data} />
        </View>
        <CounterLikesAndComments comments={10} favorites={37} />
        <MaterialComments />
      </ScrollView>
    </View>
  );
}

export default React.memo(Material);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: StatusBar.currentHeight || 0,
  },
  title: {
    ...Style.font_bold,
    fontSize: 22,
    paddingStart: 20,
    paddingEnd: 20,
  },
  content: {
    padding: 20,
  },
});
