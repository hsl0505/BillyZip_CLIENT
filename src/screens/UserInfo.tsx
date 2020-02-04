import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

function UserInfo(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>UserInfo</Text>
    </View>
  );
}

export default UserInfo;
