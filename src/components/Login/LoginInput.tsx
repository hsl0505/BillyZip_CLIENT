import React, { useState, useEffect } from 'react';
import { Input, Button, Image } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import {
  View,
  Animated,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import axiosInstance from '../../util/axiosInstance';
import asyncStorageHelper from '../../util/asyncStorageHelper';

function LoginInput(props: Partial<NavigationInjectedProps>): JSX.Element {
  const { width } = Dimensions.get('window');
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState();
  const [password, setPassword] = useState('');
  const [pwErr, setPwErr] = useState();
  const [secure, setSecure] = useState(true);

  const [aniVal] = useState(new Animated.Value(0));

  const opacity = aniVal.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  useEffect(() => {
    Animated.timing(aniVal, {
      toValue: 1,
      duration: 500,
    }).start();
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgb(102,051,204)',
      }}
    >
      <StatusBar hidden />
      <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={10}>
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={{ marginTop: 50, alignItems: 'center' }}>
            <Image
              source={require('../../../assets/login_logo.png')}
              style={{ width: 200, height: 200 }}
              placeholderStyle={{ backgroundColor: 'transparent' }}
            />
          </View>

          <Animated.View
            style={{
              opacity,
              marginTop: 40,
            }}
          >
            <View>
              <Input
                placeholder="email"
                placeholderTextColor="#BCA9F5"
                leftIcon={
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={24}
                    color="rgb(102,051,204)"
                  />
                }
                leftIconContainerStyle={{ marginRight: 10 }}
                onChangeText={(text): void => {
                  setEmail(text);
                  setEmailErr('');
                }}
                errorMessage={emailErr}
                errorStyle={{ alignSelf: 'center', color: '#fff' }}
                containerStyle={{
                  backgroundColor: '#fff',
                  width: width * 0.85,
                  alignSelf: 'center',
                  height: 40,
                  borderRadius: 20,
                }}
                inputContainerStyle={{ borderBottomWidth: 0 }}
              />
              <Input
                placeholder="password"
                placeholderTextColor="#BCA9F5"
                leftIcon={
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={24}
                    color="rgb(102,051,204)"
                  />
                }
                leftIconContainerStyle={{ marginRight: 10 }}
                onChangeText={(text): void => {
                  setPassword(text);
                  setPwErr('');
                }}
                secureTextEntry={secure}
                rightIcon={
                  <MaterialCommunityIcons
                    name={secure ? 'eye-outline' : 'eye-off-outline'}
                    color="rgb(102,051,204)"
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
                containerStyle={{
                  backgroundColor: '#fff',
                  width: width * 0.85,
                  alignSelf: 'center',
                  height: 40,
                  marginTop: 35,
                  borderRadius: 20,
                }}
                inputContainerStyle={{ borderBottomWidth: 0 }}
              />

              <View
                style={{
                  marginTop: 50,
                }}
              >
                <Button
                  title="Sign In"
                  titleStyle={{ color: 'rgb(102,051,204)', fontWeight: 'bold' }}
                  buttonStyle={{
                    width: width * 0.7,
                    alignSelf: 'center',
                    borderRadius: 20,
                    backgroundColor: '#fff',
                  }}
                  containerStyle={{ marginTop: 10 }}
                  onPress={(): void => {
                    if (email === '') {
                      setEmailErr('이메일을 입력해주세요');
                    } else if (password === '') {
                      setPwErr('비밀번호를 입력해주세요');
                    } else {
                      axiosInstance
                        .post('users/signin', {
                          email,
                          password,
                        })
                        .then(async (res) => {
                          if (res.status === 200) {
                            asyncStorageHelper.setItem(
                              'userToken',
                              res.data.token,
                            );
                            asyncStorageHelper.setItem(
                              'userId',
                              JSON.stringify(res.data.userId),
                            );
                            asyncStorageHelper.setItem(
                              'userName',
                              res.data.userName,
                            );

                            if (props.navigation) {
                              props.navigation.navigate('App');
                            }
                          }
                        })
                        .catch((err) => {
                          if (err.response.status === 401) {
                            setPwErr(err.response.data);
                          } else if (err.response.status === 404) {
                            setEmailErr('존재하지 않는 회원입니다');
                          } else {
                            console.log(err);
                          }
                        });
                    }
                  }}
                />
                <Button
                  title="You don't have email? Sign Up!"
                  titleStyle={{ color: 'rgb(102,051,204)', fontWeight: 'bold' }}
                  buttonStyle={{
                    width: width * 0.7,
                    alignSelf: 'center',
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    marginTop: 10,
                  }}
                  containerStyle={{ marginTop: 10 }}
                  onPress={(): boolean => {
                    if (props.navigation) {
                      props.navigation.navigate('MobileValid');
                    }
                    return false;
                  }}
                />
              </View>
            </View>
          </Animated.View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

export default withNavigation(LoginInput);
