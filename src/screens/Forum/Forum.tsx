import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Room from './Room';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});

function Forum(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Forum List</Text>
      <View>
        <Room />
      </View>
    </View>
  );
}

export default Forum;
