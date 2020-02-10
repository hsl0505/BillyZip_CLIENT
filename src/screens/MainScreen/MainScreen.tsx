import { createStackNavigator } from 'react-navigation-stack';

import Home from './Home';
import MoreList from './MoreList';
import HouseDetail from '../HouseDetail/HouseDetail';

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
  },
  {
    initialRouteName: 'Home',
  },
);

export default MainScreenStackNav;
