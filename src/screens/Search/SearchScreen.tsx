import { createStackNavigator } from 'react-navigation-stack';
import Search from './Search';
import MapSearch from './MapSearch';
import NormalSearch from './NormalSearch';

// * 다른 스크린으로 보내는 방법
// onPress={() => props.navigation.navigate('보낼 스크린 이름')}

// 스택 만든다
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
  },
  {
    initialRouteName: 'SelectSearch',
  },
);

export default SearchScreen;
