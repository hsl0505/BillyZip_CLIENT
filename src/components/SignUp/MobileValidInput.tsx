import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, StatusBar } from 'react-native';
import { Input, Button, Overlay } from 'react-native-elements';

import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

import axiosInstance from '../../util/axiosInstance';

interface Props {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}
const styles = StyleSheet.create({
  TextViewStyle: {
    backgroundColor: '#F9F9F9',
    borderColor: '#dfe4ea',
    borderWidth: 1,

    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    width: '90%',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
  },
});

function MobileValidInput(props: Props): JSX.Element {
  const [userPhoneNum, setuserPhoneNum] = useState('');
  const [PhoneNumErr, setPhoneNumErr] = useState();
  const [userVerifyNum, setuserVerifyNum] = useState('');
  const [userVerifyNumErr, setuserVerifyNumErr] = useState();
  const [isVisible, setVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar hidden={false} />
      <View>
        <Text style={styles.title}>휴대폰 번호 인증</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Input
          placeholder="핸드폰 번호를 - 없이 입력해주세요"
          multiline
          containerStyle={styles.TextViewStyle}
          underlineColorAndroid="transparent"
          onChangeText={(text): void => {
            setuserPhoneNum(text);
          }}
          errorMessage={PhoneNumErr}
          errorStyle={{ alignSelf: 'center' }}
        />
        <Button
          title="인증번호 발송"
          titleStyle={{ color: userPhoneNum.length === 11 ? 'purple' : '#fff' }}
          buttonStyle={{
            backgroundColor: userPhoneNum.length === 11 ? '#fff' : '#D1D1D1',
            borderColor: userPhoneNum.length === 11 ? 'purple' : '#dfe4ea',
            borderWidth: 1,
            marginBottom: 30,
            marginLeft: 20,
            marginRight: 20,
            padding: 10,
            width: '90%',
          }}
          onPress={(): void => {
            axiosInstance
              .post('auth', {
                userPhoneNum,
              })
              .then((res) => {
                if (res.status === 200) {
                  Alert.alert('인증번호가 발송되었습니다');
                }
              })
              .catch((err) => {
                if (err.response.status === 400) {
                  setPhoneNumErr(err.response.data);
                }
              });
          }}
        />
      </View>

      <View style={{ marginTop: 30 }}>
        <Input
          placeholder="인증번호를 입력해주세요 예) 1234"
          containerStyle={styles.TextViewStyle}
          underlineColorAndroid="transparent"
          onChangeText={(text): void => {
            setuserVerifyNum(text);
          }}
          errorMessage={userVerifyNumErr}
          errorStyle={{ alignSelf: 'center' }}
        />
        <Button
          title="인증번호 확인"
          titleStyle={{ color: userVerifyNum.length === 4 ? 'purple' : '#fff' }}
          buttonStyle={{
            backgroundColor: userVerifyNum.length === 4 ? '#fff' : '#D1D1D1',
            borderColor: userVerifyNum.length === 4 ? 'purple' : '#dfe4ea',
            borderWidth: 1,
            marginBottom: 30,
            marginLeft: 20,
            marginRight: 20,
            padding: 10,
            width: '90%',
          }}
          onPress={(): void => {
            axiosInstance
              .post('auth/verify', {
                userVerifyNum,
                userPhoneNum,
              })
              .then((res) => {
                if (res.status === 200) {
                  setVisible(true);
                }
              })
              .catch((err) => {
                if (err.response.status === 400) {
                  setuserVerifyNumErr(err.response.data);
                }
              });
          }}
        />
      </View>

      <Overlay
        isVisible={isVisible}
        height={100}
        width={220}
        onBackdropPress={(): void => setVisible(false)}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ alignSelf: 'center', fontSize: 15, marginTop: 10 }}>
            휴대폰 번호가 인증되었습니다
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-around',
            }}
          >
            <Button
              title="완료"
              onPress={(): void => {
                setVisible(false);
                props.navigation.navigate('SignUpInputScreen', {
                  mobiletest: userPhoneNum,
                });
              }}
              type="clear"
            />
          </View>
        </View>
      </Overlay>
    </View>
  );
}
export default withNavigation(MobileValidInput);
