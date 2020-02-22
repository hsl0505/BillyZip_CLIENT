import { createStackNavigator } from 'react-navigation-stack';
import Forum from '../Forum/Forum';
import Room from '../Forum/Room';
import ForumNotice from '../../components/Forum/ForumNotice';

const ForumScreen = createStackNavigator(
  {
    Forum: {
      screen: Forum,
    },
    Room: {
      screen: Room,
    },
    ForumNotice: {
      screen: ForumNotice,
    },
  },
  {
    initialRouteName: 'Forum',
  },
);

export default ForumScreen;
