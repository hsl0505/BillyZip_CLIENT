// import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthLoadingScreen from './AuthLoadingScreen';
import LoginScreen from '../LoginScreen/LoginScreen';
import TabNav from '../TabNav';

const AuthValideScreen = createSwitchNavigator(
  {
    AuthLoding: AuthLoadingScreen,
    App: TabNav,
    Auth: LoginScreen,
  },
  {
    initialRouteName: 'AuthLoding',
  },
);

export default createAppContainer(AuthValideScreen);
