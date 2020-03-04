import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import CurrentPlan from '../../../components/UserInfo/CurrentModel/CurrentPlan';
import axiosInstance from '../../../util/axiosInstance';

function Subscribe(): JSX.Element {
  const [subscribedHouses, setSubscribedHouses] = useState({});
  const [ready, setReady] = useState(false);
  useEffect(() => {
    axiosInstance
      .get(`users/current-info`)
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
        <View>
          <CurrentPlan subscribedHouses={subscribedHouses} />
        </View>
      )}
    </View>
  );
}

export default Subscribe;
