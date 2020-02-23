import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import CurrentPlan from '../../../components/UserInfo/CurrentModel/CurrentPlan';
// import LivingHouse from '../../../components/UserInfo/CurrentModel/LivingHouse';
import axiosInstance from '../../../util/axiosInstance';

/* 
          <LivingHouse subscribedHouses={subscribedHouses} /> */

// const styles = StyleSheet.create({
//   // ButtonViewStyle: {
//   //   backgroundColor: '#D1D1D1',
//   //   // borderColor: '#dfe4ea',
//   //   // borderWidth: 1,
//   //   // marginBottom: 30,
//   //   // marginLeft: 20,
//   //   // marginRight: 20,
//   //   // padding: 10,
//   //   width: '90%',
//   // },
//   TextViewStyle: {
//     backgroundColor: '#F9F9F9',
//     borderColor: '#dfe4ea',
//     borderWidth: 1,
//     marginLeft: 20,
//     marginRight: 20,
//     padding: 10,
//     width: '90%',
//   },
//   title: {
//     fontSize: 15,
//     marginBottom: 15,
//     marginLeft: 20,
//     marginRight: 20,
//     marginTop: 20,
//   },
// });

function Subscribe(): JSX.Element {
  const [subscribedHouses, setSubscribedHouses] = useState({});
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
        <View>
          <Text>현재 구독 중인 플랜 :</Text>
          <CurrentPlan subscribedHouses={subscribedHouses} />
        </View>
      )}
    </View>
  );
}

export default Subscribe;
