// import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthLoadingScreen from './AuthLoadingScreen';
import LoginInputScreen from '../LoginScreen/LoginInputScreen';
import TabNav from '../TabNav';

const AuthValideScreen = createSwitchNavigator(
  {
    AuthLoding: AuthLoadingScreen,
    App: TabNav,
    Auth: LoginInputScreen,
  },
  {
    initialRouteName: 'AuthLoding',
  },
);

export default createAppContainer(AuthValideScreen);
