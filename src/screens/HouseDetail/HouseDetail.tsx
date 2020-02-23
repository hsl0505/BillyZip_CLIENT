import React, { useState, useEffect } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

import HouseDetailComponent from '../../components/HouseDetail/HouseDetailComponent';
import HouseDetailContent from '../../components/HouseDetail/HouseDetailContent';
import axiosInstance from '../../util/axiosInstance';

interface Props {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function HouseDetail(props: Props): JSX.Element {
  const { navigation } = props;
  const houseId = navigation.getParam('houseId');
  const isFav = navigation.getParam('isFav');
  const [house, setHouse] = useState();
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    const subscribe = navigation.addListener('didFocus', () => {
      axiosInstance
        .get(`houses/${houseId}`)
        .then((res) => {
          setHouse(res.data);
          setReady(true);
        })
        .catch((err) => console.log(err));
    });

    return (): void => {
      subscribe.remove();
    };
  }, [houseId, navigation]);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {house && isReady ? (
        <ScrollView removeClippedSubviews>
          <HouseDetailComponent
            images={house.images}
            houseId={houseId}
            favsNow={house.favsNow}
          />
          <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <HouseDetailContent isFav={isFav} house={house} />
          </View>
        </ScrollView>
      ) : (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
}

HouseDetail.navigationOptions = (): object => ({
  title: '',
  headerBackTitleVisible: false,
  headerTransparent: true,
  headerLeft: (): void => undefined,
});

export default withNavigation(HouseDetail);
