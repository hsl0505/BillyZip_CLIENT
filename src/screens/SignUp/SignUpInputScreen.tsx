import React from 'react';
import { View } from 'react-native';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import SignUpInput from '../../components/SignUp/SignUpInput';

interface Props {
  // mobiletest: string;
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function SignUpInputScreen(props: Props): JSX.Element {
  const { navigation } = props;
  const mobiletest = navigation ? navigation.getParam('mobiletest') : undefined;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <SignUpInput mobiletest={mobiletest} />
    </View>
  );
}

export default withNavigation(SignUpInputScreen);
