import React, { useState } from 'react';
import { Input, Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { View, Text } from 'react-native';
import axiosInstance from '../../util/axiosInstance';
import asyncStorageHelper from '../../util/asyncStorageHelper';

function LoginInput(props: Partial<NavigationInjectedProps>): JSX.Element {
  const [email, setEmail] = useState();
  const [emailErr, setEmailErr] = useState();
  const [password, setPassword] = useState();
  const [pwErr, setPwErr] = useState();
  const [secure, setSecure] = useState(true);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>로그인 페이지!</Text>
      <Input
        placeholder="email"
        leftIcon={<MaterialCommunityIcons name="email-outline" size={24} />}
        leftIconContainerStyle={{ marginRight: 10 }}
        onChangeText={(text): void => setEmail(text)}
        errorMessage={emailErr}
        errorStyle={{ alignSelf: 'center' }}
      />
      <Input
        placeholder="password"
        leftIcon={<MaterialCommunityIcons name="lock-outline" size={24} />}
        leftIconContainerStyle={{ marginRight: 10 }}
        onChangeText={(text): void => setPassword(text)}
        secureTextEntry={secure}
        rightIcon={
          <MaterialCommunityIcons
            name="eye-outline"
            size={24}
            onPress={(): void => {
              if (secure) {
                setSecure(false);
              } else {
                setSecure(true);
              }
            }}
          />
        }
        rightIconContainerStyle={{ marginRight: 10 }}
        errorMessage={pwErr}
        errorStyle={{ alignSelf: 'center' }}
      />
      <Button
        title="Sign In"
        containerStyle={{ marginTop: 10 }}
        onPress={(): void => {
          setEmailErr('');
          setPwErr('');
          axiosInstance
            .post('users/signin', {
              email,
              password,
            })
            .then(async (res) => {
              if (res.status === 200) {
                console.log(res.data);
                asyncStorageHelper.setItem('userToken', res.data.token);
                asyncStorageHelper.setItem('userId', JSON.stringify(res.data.userId));
                asyncStorageHelper.setItem('userName', res.data.userName);

                if (props.navigation) {
                  props.navigation.navigate('App');
                }
              }
            })
            .catch((err) => {
              if (err.response.status === 401) {
                setPwErr(err.response.data);
              } else if (err.response.status === 409) {
                setEmailErr(err.response.data);
              } else {
                console.log(err);
              }
            });
        }}
      />
      <Button
        title="Sign Up"
        containerStyle={{ marginTop: 10 }}
        onPress={(): boolean => {
          if (props.navigation) {
            props.navigation.navigate('MobileValid');
          }
          return false;
        }}
      />
      <Button title="Password 찾기" containerStyle={{ marginTop: 10 }} />
    </View>
  );
}

export default withNavigation(LoginInput);
