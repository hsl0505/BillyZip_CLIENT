import React, { useState, useEffect } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
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

  const [isReady, setReady] = useState(false);

  console.log('초기 렌더링');

  useEffect(() => {
    if (rankAndRand.rank.length === 0) {
      console.log('componentDitMount');
      axiosInstance
        .get('houses')
        .then((res) => {
          setRandR(res.data);
          setReady(true);
        })
        .catch((err) => console.log('err?', err));
    }

    const subscribe = navigation.addListener('willFocus', () => {
      axiosInstance
        .get('houses')
        .then((res) => {
          setRandR(res.data);
          setReady(true);
        })
        .catch((err) => console.log(err));
    });

    return (): void => {
      subscribe.remove();
    };
  }, [navigation, rankAndRand]);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', marginTop: 20 }}>
      {isReady ? (
        <ScrollView removeClippedSubviews>
          <View style={{ flex: 1 }}>
            <Recommend rank={rankAndRand.rank} />
          </View>
          <View style={{ flex: 1, marginTop: 45 }}>
            <HouseList rand={rankAndRand.rand} />
          </View>
        </ScrollView>
      ) : (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
}

export default withNavigation(Home);
