import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
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
      {house ? (
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
        <View />
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
