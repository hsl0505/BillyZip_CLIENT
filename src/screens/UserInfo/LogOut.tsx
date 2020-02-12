import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

import asyncStorageHelper from '../../util/asyncStorageHelper';

interface Props {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

function LogOut(props: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>로그아웃 페이지</Text>
      <Button
        title="임시 로그아웃"
        onPress={(): void => {
          asyncStorageHelper.clear();
          props.navigation.navigate('LoginScreen');
        }}
      />
    </View>
  );
}

export default withNavigation(LogOut);
