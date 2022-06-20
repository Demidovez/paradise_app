import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function EventsPage() {
  return (
    <View style={styles.container}>
      <Text>EventsPage</Text>
    </View>
  );
}

export default React.memo(EventsPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
