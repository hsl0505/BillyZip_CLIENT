import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import Recommend from '../../components/MainScreen/Recommend';
import HouseList from '../../components/MainScreen/HouseList';
import axiosInstance from '../../util/axiosInstance';

interface Props {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function Home(props: Props): JSX.Element {
  const { navigation } = props;
  const [rankAndRand, setRandR] = useState({
    rank: [],
    rand: [[], [], [], [], []],
  });

  useEffect(() => {
    if (rankAndRand.rank.length === 0) {
      axiosInstance
        .get('houses')
        .then((res) => {
          setRandR(res.data);
        })
        .catch((err) => console.log('err?', err));
    }

    const subscribe = navigation.addListener('willFocus', () => {
      axiosInstance
        .get('houses')
        .then((res) => {
          setRandR(res.data);
        })
        .catch((err) => console.log(err));
    });

    return (): void => {
      subscribe.remove();
    };
  }, [navigation, rankAndRand]);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', marginTop: 20 }}>
      <ScrollView removeClippedSubviews>
        <View style={{ flex: 1 }}>
          <Recommend rank={rankAndRand.rank} />
        </View>
        <View style={{ flex: 1, marginTop: 45 }}>
          <HouseList rand={rankAndRand.rand} />
        </View>
      </ScrollView>
    </View>
  );
}

export default withNavigation(Home);
