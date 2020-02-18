import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';

import CurrentPlan from '../../../components/UserInfo/CurrentModel/CurrentPlan';
import LivingHouse from '../../../components/UserInfo/CurrentModel/LivingHouse';
import axiosInstance from '../../../util/axiosInstance';

function Subscribe(): JSX.Element {
  const [subscribedHouses, setSubscribedHouses] = useState([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    axiosInstance
      .get(`users/currentInfo`)
      .then((res) => {
        setSubscribedHouses(res.data);
        setReady(true);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {ready === false ? (
        <View />
      ) : (
        <ScrollView removeClippedSubviews>
          <CurrentPlan subscribedHouses={subscribedHouses} />
          <LivingHouse subscribedHouses={subscribedHouses} />
        </ScrollView>
      )}
    </View>
  );
}

export default Subscribe;
