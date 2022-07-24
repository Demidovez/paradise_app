import React from "react";
import {StyleSheet, View, Text, StatusBar} from "react-native";

function FeedPage() {
  return (
    <View style={styles.container}>
      <Text>FeedPage</Text>
    </View>
  );
}

export default React.memo(FeedPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
  },
});
