import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
import MobileValid from '../SignUp/MobileValid';
import SignUpInputScreen from '../SignUp/SignUpInputScreen';

const LoginInputScreen = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
    },
    MobileValid: {
      screen: MobileValid,
    },
    SignUpInputScreen: {
      screen: SignUpInputScreen,
    },
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
  },
);

export default LoginInputScreen;
