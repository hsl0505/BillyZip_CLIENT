import { createStackNavigator } from 'react-navigation-stack';

import FavorScreen from './FavorScreen';
import HouseDetail from '../HouseDetail/HouseDetail';
import ReviewScreen from '../HouseDetail/ReviewScreen';
import ReviewPostScreen from '../HouseDetail/ReviewPostScreen';

const Favor = createStackNavigator(
  {
    FavorScreen: {
      screen: FavorScreen,
    },
    FavorHouseDetail: {
      screen: HouseDetail,
    },
    FavorReview: {
      screen: ReviewScreen,
    },
    ReviewPostScreen: {
      screen: ReviewPostScreen,
    },
  },
  {
    initialRouteName: 'FavorScreen',
    headerMode: 'none',
  },
);

export default Favor;
