import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

import asyncStorageHelper from '../../../util/asyncStorageHelper';

import axiosInstance from '../../../util/axiosInstance';

interface Props {
  myInfo: {
    email?: string;
    name?: string;
    mobile?: string;
    birth?: string;
    password?: string;
    gender?: string;
  };

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
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    width: '90%',
  },
  title: {
    fontSize: 15,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
});

function MyInfoList(props: Props): JSX.Element {
  const { myInfo } = props;
  const { email, name, mobile, birth } = myInfo;

  return (
    <View>
      <View style={{ marginTop: 40, marginLeft: 15 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 26 }}>내 정보</Text>
      </View>
      <Text style={styles.title}>이름</Text>
      <View style={styles.TextViewStyle}>
        <Text>{name}</Text>
      </View>

      <Text style={styles.title}>생년월일</Text>
      <View style={styles.TextViewStyle}>
        <Text>{birth}</Text>
      </View>

      <Text style={styles.title}>이메일</Text>
      <View style={styles.TextViewStyle}>
        <Text>{email}</Text>
      </View>

      <Text style={styles.title}>휴대폰</Text>
      <TouchableOpacity
        style={styles.TextViewStyle}
        onPress={(): void => {
          props.navigation.navigate('Mobile', {
            key: myInfo,
          });
        }}
      >
        <Text>
          {mobile} <Entypo name="chevron-thin-right" size={15} />
        </Text>
      </TouchableOpacity>

      <Text style={styles.title}>패스워드 변경</Text>
      <TouchableOpacity
        style={styles.TextViewStyle}
        onPress={(): void => {
          props.navigation.navigate('Password', {
            key: myInfo,
          });
        }}
      >
        <Text>
          ******** <Entypo name="chevron-thin-right" size={15} />
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}
      >
        <Button
          title="로그아웃"
          type="clear"
          titleStyle={{ color: 'purple' }}
          onPress={(): void => {
            asyncStorageHelper.clear();
            props.navigation.navigate('LoginScreen');
          }}
        />
        <Button
          title="회원탈퇴"
          type="clear"
          titleStyle={{ color: 'purple' }}
          onPress={(): void => {
            axiosInstance
              .delete('users/my-info')
              .then((res) => {
                if (res.status === 200) {
                  asyncStorageHelper.clear();
                }
              })
              .catch((err) => console.log(err));

            props.navigation.navigate('LoginScreen');
          }}
        />
      </View>
    </View>
  );
}

export default withNavigation(MyInfoList);
