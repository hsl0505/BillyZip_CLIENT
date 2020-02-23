import React from 'react';
import { View, Text } from 'react-native';
import { Card, Divider } from 'react-native-elements';

import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

import numberWithCommas from '../../../screens/UserInfo/Payment/numberWithCommas';
import getDate from '../../../screens/UserInfo/Payment/GetDate';

interface Props {
  ele: {
    paymentDate: string;
    paymentOption: string;
    subscribePlan: string;
  };
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function SubscribeListComponentCard(props: Props): JSX.Element {
  const { ele } = props;

  const { paymentDate, paymentOption, subscribePlan } = ele;

  // 한국시간 변경 예 ) 2020-02-22T08:20:08.510Z -> 2020. 1. 23 02:16:39

  const convertedPaymentDate = new Date(paymentDate);

  const amount: string =
    subscribePlan.length > 3 ? `${subscribePlan}00000` : `${subscribePlan}0000`; // 구독 플랜 예) 30 => 300000 / 150 => 1500000 (숫자 0 붙여주기)

  return (
    <View style={{ backgroundColor: '#fff' }}>
      <Card
        containerStyle={{ borderColor: 'purple' }}
        title="결제정보"
        dividerStyle={{ borderColor: 'purple', borderWidth: 0.5 }}
      >
        <View
          style={{
            marginBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>결제일시</Text>
          <Text>{getDate(convertedPaymentDate)}</Text>
        </View>
        <View
          style={{
            marginBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>결제수단</Text>
          <Text>{paymentOption}</Text>
        </View>
        <View
          style={{
            marginBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>구독플랜</Text>
          <Text>{subscribePlan}만원/월</Text>
        </View>
        <Divider
          style={{
            borderColor: 'purple',
            borderWidth: 0.5,
            marginBottom: 20,
          }}
        />
        <View
          style={{
            marginBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>총 결제금액</Text>
          <Text>{numberWithCommas(amount)} 원</Text>
        </View>
      </Card>
    </View>
  );
}

export default withNavigation(SubscribeListComponentCard);
