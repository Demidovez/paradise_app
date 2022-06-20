import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function HomePage() {
  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
    </View>
  );
}

export default React.memo(HomePage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
