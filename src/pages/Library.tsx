import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function LibraryPage() {
  return (
    <View style={styles.container}>
      <Text>LibraryPage</Text>
    </View>
  );
}

export default React.memo(LibraryPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
