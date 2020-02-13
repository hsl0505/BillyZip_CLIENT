import { createStackNavigator } from 'react-navigation-stack';
import Search from './Search';
import MapSearch from './MapSearch';
import NormalSearch from './NormalSearch';
import SearchResult from './SearchResult';
import HouseDetail from '../HouseDetail/HouseDetail';
import ReviewScreen from '../HouseDetail/ReviewScreen';

const SearchScreen = createStackNavigator(
  {
    SelectSearch: {
      screen: Search,
    },
    MapSearch: {
      screen: MapSearch,
    },
    NormalSearch: {
      screen: NormalSearch,
    },
    SearchResult: {
      screen: SearchResult,
    },
    HouseDetail: {
      screen: HouseDetail,
    },
    ReviewScreen: {
      screen: ReviewScreen,
    }
  },
  {
    initialRouteName: 'SelectSearch',
  },
);

export default SearchScreen;
