import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Input, ButtonGroup } from 'react-native-elements';
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
      <Button
        title="회원가입"
        onPress={(): void => {
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
        }}
      />
    </View>
  );
}

export default withNavigation(SignUpInput);
