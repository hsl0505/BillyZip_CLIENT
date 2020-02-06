import React from 'react';
import { View } from 'react-native';
import MobileValidInput from '../../components/SignUp/MobileValidInput';

function MobileValid(): JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <MobileValidInput />
    </View>
  );
}

export default MobileValid;
