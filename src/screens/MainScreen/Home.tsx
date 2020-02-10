import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import Recommend from '../../components/MainScreen/Recommend';
import HouseList from '../../components/MainScreen/HouseList';
import axiosInstance from '../../util/axiosInstance';

function Home(): JSX.Element {
  const [rank, setRank] = useState();
  const [rand, setRand] = useState();
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    axiosInstance
      .get('houses')
      .then((res) => {
        setRank(res.data.rank);
        setRand(res.data.rand);
        // setLoading(true)
      })
      .catch((err) => console.log('err?', err));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView removeClippedSubviews>
        <View style={{ flex: 1 }}>
          <Recommend rank={rank} />
        </View>
        <View style={{ flex: 1 }}>
          <HouseList rand={rand} />
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
