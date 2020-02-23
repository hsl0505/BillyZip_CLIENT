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
  // console.log('현재 구독 모델 페이지 :: ', subscribedHouses);
  const { livingHouse, currentPlan } = subscribedHouses;
  // console.log('리빙하우스 :: ', livingHouse);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 50,
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
          }}
        >
          현재 구독 중인 플랜 :
        </Text>
        <Text>
          {currentPlan === null ? '구독 플랜 미신청' : `${currentPlan}만원/월`}
        </Text>
      </View>
      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text>현재 살고 있는 집</Text>
        <View>
          <View>
            {livingHouse === undefined || livingHouse.length < 1 ? (
              <Text>현재 살고 있는 집은 없습니다</Text>
            ) : (
              <View>
                {livingHouse.map((ele) => (
                  <LivingHouseComponent key={ele.id} ele={ele} />
                ))}
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

export default withNavigation(CurrentPlan);
