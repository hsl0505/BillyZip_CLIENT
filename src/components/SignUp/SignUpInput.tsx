/* eslint-disable no-irregular-whitespace */

import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {
  Button,
  Input,
  ButtonGroup,
  CheckBox,
  Card,
} from 'react-native-elements';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import axiosInstance from '../../util/axiosInstance';

interface Props {
  mobiletest: string;
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function SignUpInput(props: Props): JSX.Element {
  const { mobiletest } = props;
  const [date, setDate] = useState();
  const [show, setShow] = useState(false);
  const [selectedIdx, setSI] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile] = useState(mobiletest);
  const [secure, setSecure] = useState(true);
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [checked, setChecked] = useState(false);

  const buttons = ['Male', 'Female'];
  return (
    <View style={{ flex: 1, marginLeft: 15 }}>
      <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={20}>
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={{ marginTop: 40 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 26 }}>
              회원가입 정보입력
            </Text>
          </View>
          <View style={{ marginTop: 15 }}>
            <Input
              placeholder="email"
              leftIcon={
                <MaterialCommunityIcons name="email-outline" size={28} />
              }
              leftIconContainerStyle={{ marginRight: 10 }}
              inputContainerStyle={{ marginRight: 15 }}
              label="Email"
              labelStyle={{ marginLeft: 10 }}
              onChangeText={(text): void => setEmail(text)}
            />
            <Input
              placeholder="password"
              leftIcon={
                <MaterialCommunityIcons name="lock-outline" size={28} />
              }
              leftIconContainerStyle={{ marginRight: 10 }}
              label="Password"
              labelStyle={{ marginLeft: 10 }}
              inputContainerStyle={{ marginRight: 15 }}
              containerStyle={{ marginTop: 15 }}
              onChangeText={(text): void => setPassword(text)}
              rightIcon={
                <MaterialCommunityIcons
                  name={secure ? 'eye-outline' : 'eye-off-outline'}
                  size={28}
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
              secureTextEntry={secure}
            />

            <Input
              placeholder="name"
              leftIcon={
                <MaterialCommunityIcons name="account-outline" size={28} />
              }
              leftIconContainerStyle={{ marginRight: 10 }}
              label="Name"
              labelStyle={{ marginLeft: 10 }}
              inputContainerStyle={{ marginRight: 15 }}
              containerStyle={{ marginTop: 15 }}
              onChangeText={(text): void => setName(text)}
            />
            <Input
              placeholder="mobile"
              leftIcon={<MaterialCommunityIcons name="cellphone" size={28} />}
              leftIconContainerStyle={{ marginRight: 10 }}
              label="Mobile"
              labelStyle={{ marginLeft: 10 }}
              inputContainerStyle={{ marginRight: 15 }}
              containerStyle={{ marginTop: 15 }}
              value={mobile}
            />
            <Input
              placeholder="달력에서 날짜를 골라주세요"
              leftIcon={<MaterialCommunityIcons name="cake" size={28} />}
              leftIconContainerStyle={{ marginRight: 10 }}
              label="Birthday"
              labelStyle={{ marginLeft: 10 }}
              inputContainerStyle={{ marginRight: 15 }}
              containerStyle={{ marginTop: 15 }}
              rightIcon={
                <MaterialCommunityIcons
                  name="calendar-blank"
                  size={28}
                  onPress={(): void => {
                    setShow(true);
                  }}
                />
              }
              rightIconContainerStyle={{ marginRight: 10 }}
              value={
                date
                  ? `${date.getFullYear()}-${date.getMonth() +
                      1}-${date.getDate()}`
                  : ''
              }
            />
          </View>

          {show && (
            <DateTimePickerModal
              mode="date"
              isVisible={show}
              onConfirm={(d): void => {
                if (d) {
                  setShow(false);
                  setDate(d);
                }
              }}
              onCancel={(): void => setShow(false)}
            />
          )}
          <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialCommunityIcons
                name="human-male-female"
                size={28}
                style={{ marginLeft: 20, marginRight: 5 }}
              />
              <Text
                style={{ fontSize: 16, fontWeight: 'bold', color: '#848484' }}
              >
                Select Gender
              </Text>
            </View>
            <View style={{ marginRight: 15 }}>
              <ButtonGroup
                selectedIndex={selectedIdx}
                buttons={buttons}
                onPress={(e): void => {
                  setSI(e);
                  setGender(buttons[e]);
                }}
                selectedButtonStyle={{ backgroundColor: 'purple' }}
              />
            </View>
          </View>

          <View style={{ marginRight: 15, marginTop: 20 }}>
            <Card>
              <Text>[개인정보 수집·이용 동의]{'\n'}</Text>
              <Text>
                ① 개인정보의 수집·이용목적 : {'\n'}사용자 위치정보에 따른 서비스
                제공{'\n'}
              </Text>
              <Text>② 수집하려는 개인정보의 항목 : 위치정보{'\n'}</Text>
              <Text>③ 개인정보의 보유 및 이용기간(근거법률) : 1년{'\n'}</Text>
              <Text>
                ④ 동의를 거부할 수 있으며, 동의 거부시 BillyZip 서비스가
                제공되지 않습니다.
              </Text>
            </Card>

            <CheckBox
              center
              title="위치정보 이용동의 [필수]"
              checked={checked}
              checkedColor="purple"
              onPress={(): void => {
                setChecked(!checked);
              }}
              containerStyle={{ backgroundColor: '#fff', borderWidth: 0 }}
            />
          </View>
          <Button
            title="회원가입"
            type="outline"
            titleStyle={{ color: 'purple' }}
            buttonStyle={{
              marginBottom: 25,
              marginRight: 15,
              borderWidth: 1,
              borderColor: 'purple',
              marginTop: 20,
              width: 200,
              alignSelf: 'center',
            }}
            onPress={(): void => {
              if (!checked) {
                Alert.alert('개인정보 수집·이용에 동의해주세요');
              } else if (
                !email ||
                !password ||
                !mobile ||
                !name ||
                !date ||
                !gender
              ) {
                Alert.alert('빠진 정보가 있는지 확인해주세요');
              } else {
                axiosInstance
                  .post('users/signup', {
                    email,
                    password,
                    name,
                    mobile,
                    birth: `${date.getFullYear()}-${date.getMonth() +
                      1}-${date.getDate()}`,
                    gender,
                  })
                  .then(() => {
                    if (props.navigation) {
                      props.navigation.navigate('LoginScreen');
                    }
                    return false;
                  })
                  .catch((err) => console.log(err));
              }
            }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

export default withNavigation(SignUpInput);
