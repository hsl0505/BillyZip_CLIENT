import { createStackNavigator } from 'react-navigation-stack';

import UserInfo from './UserInfo';
import Hosting from './Hosting/Hosting';
import HostingManagement from './Hosting/HostingManagement';
import HostingPost from './Hosting/HostingPost';
import Subscribe from './CurrentHouse/Subscribe';
import MyInfo from './MyInfo/MyInfo';
import Payment from './Payment';
import Mobile from './MyInfo/Mobile';
import Password from './MyInfo/Password';
import UserInfoList from '../../components/UserInfo/UserInfoList';
import HouseDetail from '../HouseDetail/HouseDetail';
import HostingEditScreen from './Hosting/HostingEditScreen';

const UserInfoScreenStackNav = createStackNavigator(
  {
    UserInfo: {
      screen: UserInfo,
      navigationOptions: {
        title: '더보기',
      },
    },
    Subscribe: {
      screen: Subscribe,
      navigationOptions: {
        title: '',
        headerTransparent: true,
        headerLeft: undefined,
      },
    },
    MyInfo: {
      screen: MyInfo,
      navigationOptions: {
        title: '내 정보',
      },
    },
    Hosting: {
      screen: Hosting,
      navigationOptions: {
        title: '호스팅',
      },
    },
    HostingManagement: {
      screen: HostingManagement,
      navigationOptions: {
        title: '',
        headerTransparent: true,
        headerLeft: (): null => null,
        headerBackTitleVisible: false,
      },
    },
    HostingPost: {
      screen: HostingPost,
      navigationOptions: {
        title: '',
        headerTransparent: true,
        headerLeft: (): null => null,
        headerBackTitleVisible: false,
      },
    },
    HouseDetail: {
      screen: HouseDetail,
    },
    HostingEdit: {
      screen: HostingEditScreen,
      navigationOptions: {
        title: '',
        headerTransparent: true,
        headerLeft: (): null => null,
        headerBackTitleVisible: false,
      },
    },
    Payment: {
      screen: Payment,
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
