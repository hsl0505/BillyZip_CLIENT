import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

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
          title="일반검색"
          onPress={(): void => {
            props.navigation.navigate('NormalSearch');
          }}
        />
      </View>
      <View style={styles.container}>
        <Button
          title="지도검색"
          onPress={(): void => {
            props.navigation.navigate('MapSearch');
          }}
        />
      </View>
    </View>
  );
}

export default withNavigation(SelectSearch);
