import React from 'react';
import { View } from 'react-native';
import {
    withNavigation,
    NavigationScreenProp,
    NavigationRoute,
    NavigationParams,
} from 'react-navigation';
import NormalResult from '../../components/Search/NormalResult';

interface Props {
    navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function SearchResult(props: Props): JSX.Element {
  const { navigation } = props;
  const data = navigation ? navigation.getParam('data') : undefined;

  return (
    <View>
      <NormalResult data={data} isFav='a'/>
    </View>
  );
}

export default withNavigation(SearchResult);
