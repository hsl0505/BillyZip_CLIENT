import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import axiosInstance from '../../util/axiosInstance';

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

function SelectSearch(props: Props): JSX.Element {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.container}>
        <Button
          title="상세검색"
          onPress={(): void => {
            props.navigation.navigate('NormalSearch');
          }}
        />
      </View>
      <View style={styles.container}>
        <Button
          title="지도검색"
          onPress={(): void => {
            axiosInstance.get('houses/all').then((res) => {
              props.navigation.navigate('MapSearch', {data: res.data});
            })
          }}
        />
      </View>
    </View>
  );
}

export default withNavigation(SelectSearch);
