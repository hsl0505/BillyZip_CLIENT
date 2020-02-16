import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
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
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});

function LogOut(props: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="event-available"
        size={80}
        color="purple"
        onPress={(): void => {
          asyncStorageHelper.clear();
          props.navigation.navigate('LoginScreen');
        }}
      />
      <Text style={{ fontSize: 15 }}>
        로그아웃을 하고 싶다면 아래의 버튼을 눌러주세요
      </Text>
      <Button
        title="로그아웃"
        onPress={(): void => {
          asyncStorageHelper.clear();
          props.navigation.navigate('LoginScreen');
        }}
      />
    </View>
  );
}

export default withNavigation(LogOut);
