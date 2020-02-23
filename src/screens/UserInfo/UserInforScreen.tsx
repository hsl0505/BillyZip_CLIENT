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
import HostingEditScreen from './Hosting/HostingEditScreen';
import Payment from './Payment/Payment';
import PaymentSuccess from './Payment/paymentSuccess';
import HostingApplyScreen from './Hosting/HostingApplyScreen';
import SubscribeList from './Payment/SubscribeList';
import Application from './Application';


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
    Application: {
      screen: Application,
      navigationOptions: {
        title: '매물 신청 현황',
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
    HostingApplyScreen: {
      screen: HostingApplyScreen,
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
