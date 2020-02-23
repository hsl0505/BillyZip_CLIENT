import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Card } from 'react-native-elements';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

import SubscribeListComponentCard from '../../../components/UserInfo/Payment/SubscribeListComponentCard';

interface Values {
  id: number;
  paymentDate: string;
  paymentOption: string;
  subscribePlan: string;
  user: {
    name: string;
  };
}
interface Props {
  paymentList: Values[];
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function SubscribeListComponent(props: Props): JSX.Element {
  const { paymentList } = props;
  return (
    <View>
      {paymentList.length === 0 ? (
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <AntDesign name="frowno" size={80} color="purple" />
          <Text style={{ fontSize: 20, marginTop: 50 }}>
            현재 구독중인 플랜이 없습니다
          </Text>
          <Text style={{ fontSize: 20, marginTop: 5 }}>
            다양한 플랜을 확인해보세요
          </Text>
        </View>
      ) : (
        <View>
          <Card containerStyle={{ borderColor: 'purple' }}>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              구독한 플랜 목록을 확인해보세요!
            </Text>
          </Card>
          {paymentList.map((ele) => (
            <SubscribeListComponentCard key={ele.id} ele={ele} />
          ))}
        </View>
      )}
    </View>
  );
}

export default withNavigation(SubscribeListComponent);
