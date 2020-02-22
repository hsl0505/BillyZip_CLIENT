import React from 'react';
import { View, Text, Button } from 'react-native';
import { Card, Divider } from 'react-native-elements';

import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

import numberWithCommas from './numberWithCommas';
import getDate from './GetDate';

interface Props {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function PaymentSuccess(props: Props): JSX.Element {
  const { navigation } = props;
  const paymentValues = navigation.getParam('paymentValues');

  const amount: string =
    paymentValues[2].length > 3
      ? `${paymentValues[2]}00000`
      : `${paymentValues[2]}0000`; // 구독 플랜 예) 30 => 300000 / 150 => 1500000 (숫자 0 붙여주기)

  const userName = paymentValues[3]; // 유저 이름

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Card containerStyle={{ borderColor: 'purple' }}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          {userName}님, 결제가 완료되었습니다
        </Text>
      </Card>

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
          <Text>{getDate(paymentValues[0])}</Text>
        </View>
        <View
          style={{
            marginBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>결제수단</Text>
          <Text>{paymentValues[1]}</Text>
        </View>
        <View
          style={{
            marginBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>구독모델</Text>
          <Text>{numberWithCommas(amount)}</Text>
        </View>
        <Divider
          style={{ borderColor: 'purple', borderWidth: 0.5, marginBottom: 20 }}
        />
        <View
          style={{
            marginBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>총 결제금액</Text>
          <Text>{numberWithCommas(amount)}</Text>
        </View>
        <Button
          title="확인"
          color="purple"
          onPress={(): void => {
            if (props.navigation) {
              props.navigation.navigate('UserInfo');
            }
          }}
        />
      </Card>
    </View>
  );
}

export default withNavigation(PaymentSuccess);
