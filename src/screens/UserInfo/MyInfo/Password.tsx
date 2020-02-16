import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
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
  number: number;
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
    marginBottom: 30,
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

function Password(props: Props): JSX.Element {
  const { navigation } = props;
  const params = navigation.getParam('key');
  console.log('param ::', params);
  const { email, name, birth, mobile, gender } = params;
  console.log('비밀번호 수정 페이지 : ', email, name, birth, mobile, gender);
  const { number } = props;
  const [password, setPassword] = useState();
  const [passwordErr, setPasswordErr] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>비밀번호</Text>
      <Input
        placeholder="영문, 숫자, 특수기호 혼합 8자리 이상 입력"
        containerStyle={styles.TextViewStyle}
        underlineColorAndroid="transparent"
        onChangeText={(text): void => {
          console.log('password :: ', text);
          setPassword(text);
        }}
        errorMessage={passwordErr}
      />
      <Button
        title="확인"
        buttonStyle={styles.ButtonViewStyle}
        onPress={(): void => {
          setPasswordErr('');
          axiosInstance
            .put(`users/${number}/myInfo`, {
              email,
              name,
              birth,
              mobile,
              gender,
              password,
            })
            .then((res) => {
              if (res.status === 200) {
                props.navigation.navigate('MyInfo');
              }
            })
            .catch((err) => {
              if (err.response.status === 400) {
                setPasswordErr(err.response.data);
              }
            });
        }}
      />
    </View>
  );
}

export default withNavigation(Password);
