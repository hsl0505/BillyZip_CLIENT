import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Input, Button, Overlay } from 'react-native-elements';
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

const styles = StyleSheet.create({
  ButtonViewStyle: {
    backgroundColor: '#D1D1D1',
    borderColor: '#dfe4ea',
    borderWidth: 1,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    width: '90%',
  },
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

  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 15,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
});

function Mobile(props: Props): JSX.Element {
  const [userPhoneNum, setuserPhoneNum] = useState();
  const [PhoneNumErr, setPhoneNumErr] = useState();
  const [userVerifyNum, setuserVerifyNum] = useState();
  const [userVerifyNumErr, setuserVerifyNumErr] = useState();
  const [isVisible, setVisible] = useState(false);
  console.log('유저 번호 11:: ', userPhoneNum);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>변경할 휴대폰 번호를 입력하세요</Text>

      <Input
        placeholder="예) 0101234567"
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
        buttonStyle={styles.ButtonViewStyle}
        onPress={(): void => {
          setPhoneNumErr('');
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

      <Input
        placeholder="인증번호 입력 예) 1234"
        containerStyle={styles.TextViewStyle}
        underlineColorAndroid="transparent"
        onChangeText={(text): void => {
          setuserVerifyNum(text);
        }}
        errorMessage={userVerifyNumErr}
        errorStyle={{ alignSelf: 'center' }}
      />
      <Button
        title="확인"
        buttonStyle={styles.ButtonViewStyle}
        onPress={(): void => {
          axiosInstance
            .post('auth/verify', {
              userVerifyNum,
              userPhoneNum,
            })
            .then((res) => {
              if (res.status === 200) {
                axiosInstance
                  .put('users/mobile', {
                    userPhoneNum,
                  })
                  .then((result) => {
                    if (result.status === 200) {
                      setVisible(true);
                    }
                  })
                  .catch((err) => {
                    if (err.response.status === 401) {
                      setuserVerifyNumErr(err.response.data);
                    }
                  });
              }
            })
            .catch((err) => {
              setuserVerifyNumErr(err.response.data);
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
          <Text style={{ alignSelf: 'center', fontSize: 15, marginTop: 10 }}>
            휴대폰 번호가 변경되었습니다
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
                props.navigation.navigate('UserInfo');
              }}
              type="clear"
            />
          </View>
        </View>
      </Overlay>
    </View>
  );
}

export default withNavigation(Mobile);
