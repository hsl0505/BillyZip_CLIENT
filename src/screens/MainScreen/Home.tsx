import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import Recommend from '../../components/MainScreen/Recommend';
import HouseList from '../../components/MainScreen/HouseList';
import axiosInstance from '../../util/axiosInstance';

function Home(): JSX.Element {
  const [rankAndRand, setRandR] = useState({
    rank: [],
    rand: [[], [], [], [], []],
  });

  useEffect(() => {
    axiosInstance
      .get('houses')
      .then((res) => {
        setRandR(res.data);
      })
      .catch((err) => console.log('err?', err));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView removeClippedSubviews>
        <View style={{ flex: 1 }}>
          <Recommend rank={rankAndRand.rank} />
        </View>
        <View style={{ flex: 1, marginTop: 45 }}>
          <HouseList rand={rankAndRand.rand} />
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
