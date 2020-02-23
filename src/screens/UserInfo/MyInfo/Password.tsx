import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
});

function Password(props: Props): JSX.Element {
  const { navigation } = props;
  const params = navigation.getParam('key');
  const { email, name, birth, mobile, gender } = params;
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState();
  const [isVisible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 40, marginLeft: 15 }}>
        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>비밀번호 변경</Text>
      </View>
      <View style={{ marginTop: 25 }} />
      <Input
        placeholder="영문, 숫자, 특수기호 혼합 8자리 이상 입력"
        containerStyle={styles.TextViewStyle}
        underlineColorAndroid="transparent"
        onChangeText={(text): void => {
          setPassword(text);
        }}
        errorMessage={passwordErr}
        errorStyle={{ alignSelf: 'center' }}
      />
      <Button
        title="확인"
        titleStyle={{ color: password.length >= 8 ? 'purple' : '#fff' }}
        buttonStyle={{
          backgroundColor: password.length >= 8 ? '#fff' : '#D1D1D1',
          borderColor: password.length >= 8 ? 'purple' : '#dfe4ea',
          borderWidth: 1,
          marginBottom: 30,
          marginLeft: 20,
          marginRight: 20,
          padding: 10,
          width: '90%',
        }}
        onPress={(): void => {
          setPasswordErr('');
          axiosInstance
            .put(`users/myInfo`, {
              email,
              name,
              birth,
              mobile,
              gender,
              password,
            })
            .then((res) => {
              if (res.status === 200) {
                setVisible(true);
              }
            })
            .catch((err) => {
              if (err.response.status === 400) {
                setPasswordErr(err.response.data);
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
          <Text style={{ alignSelf: 'center', fontSize: 15, marginTop: 10 }}>
            비밀번호가 변경되었습니다
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

export default withNavigation(Password);
