import React from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import { SimpleLineIcons } from '@expo/vector-icons';

interface Props {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

const IconsList = [
  {
    title: '현재 구독 플랜 / 살고 있는 집',
    icon: 'calendar',
    routeName: 'Subscribe',
  },
  {
    title: '내 정보',
    icon: 'user',
    routeName: 'MyInfo',
  },
  {
    title: '호스팅',
    icon: 'bulb',
    routeName: 'Hosting',
  },
  {
    title: '결제',
    icon: 'credit-card',
    routeName: 'Pricing',
  },
];

function UserInfolist(props: Props): JSX.Element {
  return (
    <View>
      {IconsList.map((item, i) => (
        <ListItem
          key={i.toString()}
          title={item.title}
          leftIcon={<SimpleLineIcons name={item.icon} size={28} />}
          bottomDivider
          chevron
          onPress={(): void => {
            props.navigation.navigate(`${item.routeName}`);
          }}
        />
      ))}
    </View>
  );
}
export default withNavigation(UserInfolist);
