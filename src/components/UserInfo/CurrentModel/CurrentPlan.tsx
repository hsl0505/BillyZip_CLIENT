import React from 'react';
import { View, Text } from 'react-native';

import { Card } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

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
      <Card
        containerStyle={{ borderColor: 'purple' }}
        title="현재 구독 중인 플랜"
        dividerStyle={{ borderColor: 'purple', borderWidth: 0.8 }}
      >
        {currentPlan === null ? (
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 15,
                color: 'gray',
                marginBottom: 5,
              }}
            >
              구독중인 플랜이 없습니다
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
                color: 'purple',
              }}
              onPress={(): void => {
                if (props.navigation) {
                  props.navigation.navigate('Pricing');
                }
              }}
            >
              빌리 집이 추천하는 구독 플랜 만나러 가기
              <AntDesign name="search1" size={18} />
            </Text>
          </View>
        ) : (
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: 'purple',
            }}
          >
            {currentPlan}만원/월
          </Text>
        )}
      </Card>
      <Card
        containerStyle={{ borderColor: 'purple' }}
        title="현재 살고 있는 집"
        dividerStyle={{ borderColor: 'purple', borderWidth: 0.8 }}
      >
        <View>
          {livingHouse === undefined || livingHouse.length < 1 ? (
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 15,
                  color: 'gray',
                  marginBottom: 5,
                }}
              >
                거주중인 집이 없습니다
              </Text>

              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'purple',
                }}
                onPress={(): void => {
                  if (props.navigation) {
                    props.navigation.navigate('Home');
                  }
                }}
              >
                살고 싶은 집 찾으러 가기
                <AntDesign name="search1" size={20} />
              </Text>
            </View>
          ) : (
            <View>
              {livingHouse.map((ele) => (
                <LivingHouseComponent key={ele.id} ele={ele} />
              ))}
            </View>
          )}
        </View>
      </Card>
    </View>
  );
}

export default withNavigation(CurrentPlan);
