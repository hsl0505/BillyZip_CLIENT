import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

import CurrentPlanComponent from '../../../components/UserInfo/CurrentModel/CurrentPlanComponent';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
  },
});

interface Values {
  id: number;
  plan: string;
}
interface Props {
  subscribedHouses: Values[];
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function CurrentPlan(props: Props): JSX.Element {
  const { subscribedHouses } = props;

  return (
    <View style={styles.container}>
      {subscribedHouses.length !== 0 ? (
        <View>
          {subscribedHouses.map((ele) => (
            <CurrentPlanComponent key={ele.id} ele={ele} />
          ))}
        </View>
      ) : (
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            marginTop: 100,
          }}
        >
          <AntDesign name="frowno" size={80} color="purple" />
          <Text style={{ fontSize: 20, marginTop: 50 }}>
            현재 구독중인 플랜이 없습니다
          </Text>
        </View>
      )}
    </View>
  );
}

export default withNavigation(CurrentPlan);
