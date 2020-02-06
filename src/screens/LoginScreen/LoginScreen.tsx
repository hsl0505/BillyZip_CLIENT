import React from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

function LoginScreen(props: Partial<NavigationInjectedProps>): JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'green',
      }}
    >
      <Text>로그인 페이지!</Text>
      <Input
        placeholder="email"
        leftIcon={<MaterialCommunityIcons name="email-outline" size={24} />}
        leftIconContainerStyle={{ marginRight: 10 }}
      />
      <Input
        placeholder="password"
        leftIcon={<MaterialCommunityIcons name="lock-outline" size={24} />}
        leftIconContainerStyle={{ marginRight: 10 }}
      />
      <Button
        title="Sign In"
        containerStyle={{ marginTop: 10 }}
        onPress={(): boolean => {
          if (props.navigation) {
            props.navigation.navigate('App');
          }
          return false;
        }}
      />
      <Button title="Sign Up" containerStyle={{ marginTop: 10 }} />
      <Button title="Password 찾기" containerStyle={{ marginTop: 10 }} />
    </View>
  );
}

export default withNavigation(LoginScreen);
