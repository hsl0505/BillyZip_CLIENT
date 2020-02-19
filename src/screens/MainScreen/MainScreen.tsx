import { createStackNavigator } from 'react-navigation-stack';

import Home from './Home';
import MoreList from './MoreList';
import HouseDetail from '../HouseDetail/HouseDetail';
import ReviewScreen from '../HouseDetail/ReviewScreen';

const MainScreenStackNav = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    MoreList: {
      screen: MoreList,
    },
    HouseDetail: {
      screen: HouseDetail,
    },
    ReviewScreen: {
      screen: ReviewScreen,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

export default MainScreenStackNav;
