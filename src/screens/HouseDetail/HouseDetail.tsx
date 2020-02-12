import React, { useState, useEffect } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
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
  // 여기 바껴야함

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
  console.log('디테일', house);

  // 네비게이트 파람으로 하우스 아이디, isFav 받아야함
  // HouseDetailComponent -> id, images, favs 넣어주기
  // HouseDetailContent -> 나머지 넣어주기 (avgrating 포함)

  useEffect(() => {
    axiosInstance
      .get(`houses/${houseId}`)
      .then((res) => {
        setHouse(res.data);
      })
      .catch((err) => console.log(err));
  }, [houseId]);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar hidden />
      <ScrollView removeClippedSubviews>
        <HouseDetailComponent />
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <HouseDetailContent isFav={isFav} />
        </View>
      </ScrollView>
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
