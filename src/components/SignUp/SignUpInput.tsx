import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

function SignUpInput(props: Partial<NavigationInjectedProps>): JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>회원가입 정보입력</Text>
      <Button
        title="임시 회원가입 완료 버튼"
        onPress={(): boolean => {
          if (props.navigation) {
            props.navigation.navigate('LoginScreen');
          }
          return false;
        }}
      />
    </View>
  );
}

export default withNavigation(SignUpInput);
