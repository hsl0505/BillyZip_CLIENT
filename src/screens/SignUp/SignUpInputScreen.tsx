import React from 'react';
import { View } from 'react-native';
import SignUpInput from '../../components/SignUp/SignUpInput';

function SignUpInputScreen(): JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <SignUpInput />
    </View>
  );
}

export default SignUpInputScreen;
