import { createStackNavigator } from 'react-navigation-stack';

import Home from './Home';
import MoreList from './MoreList';
import HouseDetail from '../HouseDetail/HouseDetail';
import ReviewScreen from '../HouseDetail/ReviewScreen';
import Room from '../Forum/Room';
import ReviewPostScreen from '../HouseDetail/ReviewPostScreen';

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
    ReviewPostScreen: {
      screen: ReviewPostScreen,
    },
    Room: {
      screen: Room,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

export default MainScreenStackNav;
