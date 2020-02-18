import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';

import CurrentPlan from '../../../components/UserInfo/CurrentModel/CurrentPlan';
import LivingHouse from '../../../components/UserInfo/CurrentModel/LivingHouse';
import axiosInstance from '../../../util/axiosInstance';

function Subscribe(): JSX.Element {
  const [subscribedHouses, setSubscribedHouses] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`users/currentInfo`)
      .then((res) => setSubscribedHouses(res.data))
      .catch((err) => console.log(err));
  }, []);

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
