import { createStackNavigator } from 'react-navigation-stack';

import FavorScreen from './FavorScreen';
import HouseDetail from '../HouseDetail/HouseDetail';
import ReviewScreen from '../HouseDetail/ReviewScreen';

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
  },
  {
    initialRouteName: 'FavorScreen',
  },
);

export default Favor;
