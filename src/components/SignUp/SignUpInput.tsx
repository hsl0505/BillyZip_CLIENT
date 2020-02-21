/* eslint-disable no-irregular-whitespace */
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Input, ButtonGroup, CheckBox } from 'react-native-elements';
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>회원가입 정보입력</Text>
      <Input
        placeholder="email"
        leftIcon={<MaterialCommunityIcons name="email-outline" size={28} />}
        leftIconContainerStyle={{ marginRight: 10 }}
        label="Email"
        labelStyle={{ alignSelf: 'center' }}
        onChangeText={(text): void => setEmail(text)}
      />
      <Input
        placeholder="password"
        leftIcon={<MaterialCommunityIcons name="lock-outline" size={28} />}
        leftIconContainerStyle={{ marginRight: 10 }}
        label="Password"
        labelStyle={{ alignSelf: 'center' }}
        onChangeText={(text): void => setPassword(text)}
        rightIcon={
          <MaterialCommunityIcons
            name="eye-outline"
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
        leftIcon={<MaterialCommunityIcons name="account-outline" size={28} />}
        leftIconContainerStyle={{ marginRight: 10 }}
        label="Name"
        labelStyle={{ alignSelf: 'center' }}
        onChangeText={(text): void => setName(text)}
      />
      <Input
        placeholder="mobile"
        leftIcon={<MaterialCommunityIcons name="cellphone" size={28} />}
        leftIconContainerStyle={{ marginRight: 10 }}
        label="Mobile"
        labelStyle={{ alignSelf: 'center' }}
        value={mobile}
      />
      <Input
        placeholder="달력에서 날짜를 골라주세요"
        leftIcon={<MaterialCommunityIcons name="cake" size={28} />}
        leftIconContainerStyle={{ marginRight: 10 }}
        label="Birthday"
        labelStyle={{ alignSelf: 'center' }}
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
            ? `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
            : ''
        }
      />
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
      <View style={{ flexDirection: 'row' }}>
        <MaterialCommunityIcons name="human-male-female" size={28} />
        <Text>Select Gender</Text>
      </View>

      <ButtonGroup
        selectedIndex={selectedIdx}
        buttons={buttons}
        onPress={(e): void => {
          setSI(e);
          setGender(buttons[e]);
        }}
      />
      <View>
        <Text>{`
      [개인정보 수집·이용 동의]

      ① 개인정보의 수집·이용목적 : 사용자 위치정보에 따른 서비스 제공
      ② 수집하려는 개인정보의 항목 : 위치정보
      ③ 개인정보의 보유 및 이용기간(근거법률) : 1년
      ④ 동의를 거부할 수 있으며, 동의 거부시 BillyZip 서비스가 제공되지 않습니다.
      `}</Text>
        <CheckBox
          center
          title="위치정보 이용동의[필수]"
          checked={checked}
          onPress={() => {
            setChecked(!checked);
          }}
        />
      </View>
      <Button
        title="회원가입"
        onPress={(): void => {
          if (checked === true) {
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
    </View>
  );
}

export default withNavigation(SignUpInput);
