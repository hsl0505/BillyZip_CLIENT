import { createStackNavigator } from 'react-navigation-stack';
import Forum from '../Forum/Forum';
import Room from '../Forum/Room';

const ForumScreen = createStackNavigator(
  {
    Forum: {
      screen: Forum,
    },
    Room: {
      screen: Room,
    },
  },
  {
    initialRouteName: 'Forum',
  },
);

export default ForumScreen;
