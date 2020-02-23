import React from 'react';
import { View } from 'react-native';

import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

import SubscribeListComponentCard from '../../../components/UserInfo/Payment/SubscribeListComponentCard';

interface Values {
  id: number;
  paymentDate: string;
  paymentOption: string;
  subscribePlan: string;
  user: {
    name: string;
  };
}
interface Props {
  paymentList: Values[];
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function SubscribeListComponent(props: Props): JSX.Element {
  const { paymentList } = props;

  return (
    <View>
      {paymentList.map((ele) => (
        <SubscribeListComponentCard key={ele.id} ele={ele} />
      ))}
    </View>
  );
}

export default withNavigation(SubscribeListComponent);
