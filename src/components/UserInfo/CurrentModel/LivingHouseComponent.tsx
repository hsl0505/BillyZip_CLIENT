import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

interface Props {
  ele: {
    id: number;
    type: string;
    year: number;
    access: number;
    adminDistrict: string;
    houseRule: string;
  };
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function LivingHouseComponenet(props: Props): JSX.Element {
  const { ele } = props;
  const { id, type, year, access, adminDistrict, houseRule } = ele;
  console.log('id :: ', id);

  const list = [
    {
      name: `구독 타입 : ${type}`,
      icon: 'home-account',
    },
    {
      name: `건축년도 : ${year}년 이내`,
      icon: 'calendar-range',
    },
    {
      name: `지하철 도보 : ${access}분 이내`,
      icon: 'subway',
    },
    {
      name: `주소 : ${adminDistrict}`,
      icon: 'home-map-marker',
    },
    {
      name: `주의사항 : ${houseRule}`,
      icon: 'message-alert',
    },
    {
      name: '상세 정보 확인하기',
      icon: 'comment-search-outline',
    },
  ];

  return (
    <View>
      {list.map((l, i) => (
        <ListItem
          key={i.toString()}
          title={l.name}
          leftIcon={<MaterialCommunityIcons name={l.icon} size={28} />}
          bottomDivider
          onPress={(): void => {
            if (l.icon === 'comment-search-outline') {
              props.navigation.navigate('HouseDetail', { houseId: id });
            }
          }}
        />
      ))}
    </View>
  );
}
export default withNavigation(LivingHouseComponenet);
