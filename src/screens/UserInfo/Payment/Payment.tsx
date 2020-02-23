import React, { useState } from 'react';
import { View, Picker, Button, Text, Alert } from 'react-native';
import { Overlay, Card } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

import axiosInstance from '../../../util/axiosInstance';

interface Props {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function Payment(props: Props): JSX.Element {
  const { navigation } = props;
  const subscribePlan = navigation.getParam('subscribePlan');

  const [paymentDate] = useState(new Date());
  const [paymentOption, setPaymentOption] = useState();
  const [userName, setUserName] = useState();
  const [isVisible, setVisible] = useState(false);

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 5,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
        }}
      >
        <AntDesign name="check" size={20} />
        결제 수단을 선택하세요
      </Text>
      <Card>
        <View
          style={{
            marginLeft: 15,
            marginRight: 15,
          }}
        >
          <Picker
            selectedValue={paymentOption}
            onValueChange={(item): void => setPaymentOption(item)}
          >
            <Picker.Item label="선택" />
            <Picker.Item label="계좌이체" value="계좌이체" />
            <Picker.Item label="신용카드" value="신용카드" />
          </Picker>

          <Button
            title="결제하기"
            color="purple"
            onPress={(): void => {
              console.log('결제하기 버튼 클릭');
              axiosInstance
                .post('payment', {
                  subscribePlan,
                  paymentDate,
                  paymentOption,
                })
                .then((res) => {
                  if (res.status === 200) {
                    setVisible(true);
                    setUserName(res.data.name);
                  }
                })
                .catch((err) => {
                  if (err.response.status === 400) {
                    Alert.alert('결제수단을 입력해주세요');
                  }
                });
            }}
          />

          <Overlay
            isVisible={isVisible}
            height={100}
            width={220}
            onBackdropPress={(): void => setVisible(false)}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{ alignSelf: 'center', fontSize: 15, marginTop: 10 }}
              >
                결제가 완료되었습니다
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'space-around',
                }}
              >
                <View>
                  <Button
                    title="완료"
                    onPress={(): void => {
                      setVisible(false);
                      props.navigation.navigate('PaymentSuccess', {
                        paymentValues: [
                          paymentDate,
                          paymentOption,
                          subscribePlan,
                          userName,
                        ],
                      });
                    }}
                  />
                </View>
              </View>
            </View>
          </Overlay>
        </View>
      </Card>
    </View>
  );
}

export default withNavigation(Payment);
