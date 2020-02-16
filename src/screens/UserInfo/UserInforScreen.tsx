import { createStackNavigator } from 'react-navigation-stack';

import UserInfo from './UserInfo';
import Hosting from './Hosting/Hosting';
import HostingManagement from './Hosting/HostingManagement';
import HostingPost from './Hosting/HostingPost';
import Subscribe from './CurrentHouse/Subscribe';
import MyInfo from './MyInfo/MyInfo';
import Payment from './Payment';
import LogOut from './LogOut';
import Mobile from './MyInfo/Mobile';
import Password from './MyInfo/Password';
import UserInfoList from '../../components/UserInfo/UserInfoList';

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
    Payment: {
      screen: Payment,
    },
    LogOut: {
      screen: LogOut,
    },
    Mobile: {
      screen: Mobile,
    },
    Password: {
      screen: Password,
    },
    UserInfoList: {
      screen: UserInfoList,
    },
  },

  {
    initialRouteName: 'UserInfo',
  },
);

export default UserInfoScreenStackNav;
