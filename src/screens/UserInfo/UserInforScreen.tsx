import { createStackNavigator } from 'react-navigation-stack';

import UserInfo from './UserInfo';
import Subscribe from './Subscribe';
import MyInfo from './MyInfo';
import Hosting from './Hosting/Hosting';
import Pick from './Pick';
import Payment from './Payment';
import LogOut from './LogOut';
import HostingManagement from './Hosting/HostingManagement';
import HostingPost from './Hosting/HostingPost';

const UserInfoScreenStackNav = createStackNavigator(
  {
    UserInfo: {
      screen: UserInfo,
    },
    Subscribe: {
      screen: Subscribe,
    },
    MyInfo: {
      screen: MyInfo,
    },
    Hosting: {
      screen: Hosting,
    },
    HostingManagement: {
      screen: HostingManagement,
    },
    HostingPost: {
      screen: HostingPost,
    },
    Pick: {
      screen: Pick,
    },
    Payment: {
      screen: Payment,
    },
    LogOut: {
      screen: LogOut,
    },
  },
  {
    initialRouteName: 'UserInfo',
  },
);

export default UserInfoScreenStackNav;
