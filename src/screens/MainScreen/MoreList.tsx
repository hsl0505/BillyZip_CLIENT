import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import axiosInstance from '../../util/axiosInstance';

import MoreListEntry from '../../components/MainScreen/MoreListEntry';

interface Props {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function MoreList(props: Props): JSX.Element {
  const { navigation } = props;
  const part = navigation.getParam('part');
  const [houses, setHouses] = useState();

  useEffect(() => {
    axiosInstance
      .get(`houses/part/${part}`)
      .then((res) => {
        setHouses(res.data);
      })
      .catch((err) => console.log(err));
  }, [part]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <MoreListEntry houses={houses} isFav="m" />
    </View>
  );
}

export default withNavigation(MoreList);
