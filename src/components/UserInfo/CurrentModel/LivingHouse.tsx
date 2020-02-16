import React from 'react';
import { View } from 'react-native';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import LivingHouseComponent from '../../../components/UserInfo/CurrentModel/LivingHouseComponent';

interface Values {
  id: number;
  type: string;
  year: number;
  access: number;
  adminDistrict: string;
  houseRule: string;
}
interface Props {
  subscribedHouses: Values[];
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function LivingHouse(props: Props): JSX.Element {
  const { subscribedHouses } = props;

  return (
    <View>
      {subscribedHouses.length !== 0 ? (
        <View>
          {subscribedHouses.map((ele) => (
            <LivingHouseComponent key={ele.id} ele={ele} />
          ))}
        </View>
      ) : (
        <View />
      )}
    </View>
  );
}

export default withNavigation(LivingHouse);
