import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import asyncStorageHelper from '../util/asyncStorageHelper';

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
      <Button
        title="임시 로그아웃"
        onPress={(): void => {
          asyncStorageHelper.clear();
        }}
      />
    </View>
  );
}

export default UserInfo;
