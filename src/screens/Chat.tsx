import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Room from './Room';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

function Chat(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Chat List</Text>
      <Room />
    </View>
  );
}

export default Chat;
