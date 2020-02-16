import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
  },
});

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
      icon: 'done',
    },
    {
      name: `건축 년도 : ${year}년 이내`,
      icon: 'done',
    },
    {
      name: `지하철 도보 : ${access}분 이내`,
      icon: 'done',
    },
    {
      name: `행정구역명 : ${adminDistrict}`,
      icon: 'done',
    },
    {
      name: `특약사항 : ${houseRule}`,
      icon: 'done',
    },
    {
      name: '상세 정보 확인하기',
      icon: 'zoom-in',
    },
  ];

  return (
    <View style={styles.container}>
      {list.map((l, i) => (
        <ListItem
          key={i.toString()}
          title={l.name}
          leftIcon={<MaterialIcons name={l.icon} size={28} />}
          bottomDivider
          onPress={(): void => {
            if (l.icon === 'zoom-in') {
              props.navigation.navigate('HouseDetail', { houseId: id });
            }
          }}
        />
      ))}
    </View>
  );
}
export default withNavigation(LivingHouseComponenet);
