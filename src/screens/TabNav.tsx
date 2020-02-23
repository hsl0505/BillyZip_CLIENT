import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AntDesign } from '@expo/vector-icons';

import MainScreenStackNav from './MainScreen/MainScreen';
import Favor from './Favor/Favor';
import SearchScreen from './Search/SearchScreen';
import ForumScreen from './Forum/ForumScreen';
import UserInfoScreenStackNav from './UserInfo/UserInforScreen';

interface IconProps {
  focused: boolean;
  tintColor: string | undefined;
}

const TabNav = createBottomTabNavigator(
  {
    MainScreenStackNav,
    Favor,
    Search: SearchScreen,
    Forum: ForumScreen,
    UserInfo: UserInfoScreenStackNav,
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
          case 'Forum':
            iconName = 'message1';
            break;
          case 'UserInfo':
            iconName = 'ellipsis1';
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
    // resetOnBlur: true,
  },
);

export default createAppContainer(TabNav);
