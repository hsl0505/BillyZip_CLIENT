import React from 'react';
import { View, Text } from 'react-native';

import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

import LivingHouseComponent from './LivingHouseComponent';

interface LivingHouse {
  id: number;
  type: string;
  year: number;
  access: number;
  adminDistrict: string;
  houseRule: string;
}
interface Props {
  subscribedHouses: {
    livingHouse?: LivingHouse[];
    currentPlan?: string;
  };
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function CurrentPlan(props: Props): JSX.Element {
  const { subscribedHouses } = props;
  console.log('현재 구독 모델 페이지 :: ', subscribedHouses);
  const { livingHouse, currentPlan } = subscribedHouses;

  return (
    <View>
      <Text>현구 구독 모델 페이지</Text>
      <Text>
        {currentPlan === null ? '구독 플랜 미신청' : `${currentPlan}만원/달`}
      </Text>
      <Text>현재 살고 있는 집</Text>
      <View>
        {livingHouse === undefined ? (
          <Text>현재 살고 있는 집이 없습니다</Text>
        ) : (
          <View>
            {livingHouse.map((ele) => (
              <LivingHouseComponent key={ele.id} ele={ele} />
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

export default withNavigation(CurrentPlan);
