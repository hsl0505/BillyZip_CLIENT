import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';

import CurrentPlan from '../../../components/UserInfo/CurrentModel/CurrentPlan';
import LivingHouse from '../../../components/UserInfo/CurrentModel/LivingHouse';
import axiosInstance from '../../../util/axiosInstance';

interface Props {
  number: number;
}

function Subscribe(props: Props): JSX.Element {
  const { number } = props;
  const [subscribedHouses, setSubscribedHouses] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`users/${number}/currentInfo`)
      .then((res) => setSubscribedHouses(res.data))
      .catch((err) => console.log(err));
  }, [number]);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView removeClippedSubviews>
        <CurrentPlan subscribedHouses={subscribedHouses} />
        <LivingHouse subscribedHouses={subscribedHouses} />
      </ScrollView>
    </View>
  );
}

export default Subscribe;
