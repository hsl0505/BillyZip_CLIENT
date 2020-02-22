import { createStackNavigator } from 'react-navigation-stack';

import UserInfo from './UserInfo';
import Hosting from './Hosting/Hosting';
import HostingManagement from './Hosting/HostingManagement';
import HostingPost from './Hosting/HostingPost';
import Subscribe from './CurrentHouse/Subscribe';
import MyInfo from './MyInfo/MyInfo';
import Pricing from '../UserInfo/Payment/Pricing';
import Mobile from './MyInfo/Mobile';
import Password from './MyInfo/Password';
import UserInfoList from '../../components/UserInfo/UserInfoList';
import HouseDetail from '../HouseDetail/HouseDetail';
import Payment from './Payment/Payment';
import PaymentSuccess from './Payment/paymentSuccess';
import SubscribeList from './Payment/SubscribeList';

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
      navigationOptions: {},
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
    Pricing: {
      screen: Pricing,
    },
    PaymentSuccess: {
      screen: PaymentSuccess,
    },

    SubscribeList: {
      screen: SubscribeList,
    },
  },

  {
    initialRouteName: 'UserInfo',
  },
);

export default UserInfoScreenStackNav;
