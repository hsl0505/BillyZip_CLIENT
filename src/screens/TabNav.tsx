import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AntDesign } from '@expo/vector-icons';

import MainScreenStackNav from './MainScreen/MainScreen';
import Favor from './Favor';
// import Search from './Search/Search';
import SearchScreen from './Search/SearchScreen'
import Chat from './Chat';
import UserInfo from './UserInfo/UserInfo';

interface IconProps {
  focused: boolean;
  tintColor: string | undefined;
}

const TabNav = createBottomTabNavigator(
  {
    MainScreenStackNav,
    Favor,
    Search: SearchScreen,
    Chat,
    UserInfo,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }: IconProps): JSX.Element => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'MainScreenStackNav':
            iconName = 'home';
            break;
          case 'Favor':
            iconName = 'heart';
            break;
          case 'Search':
            iconName = 'search1';
            break;
          case 'Chat':
            iconName = 'message1';
            break;
          case 'UserInfo':
            iconName = 'user';
            break;
          default:
            iconName = 'exclamationcircleo';
        }
        return <AntDesign name={iconName} size={28} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'purple',
      inactiveTintColor: 'gray',
      showLabel: false,
    },
  },
);

export default createAppContainer(TabNav);
