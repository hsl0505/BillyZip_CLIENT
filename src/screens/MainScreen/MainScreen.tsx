import { createStackNavigator } from 'react-navigation-stack';

import Home from './Home';
import MoreList from './MoreList';

const MainScreenStackNav = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    MoreList: {
      screen: MoreList,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default MainScreenStackNav;
