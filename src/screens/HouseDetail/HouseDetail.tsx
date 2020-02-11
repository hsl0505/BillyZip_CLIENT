import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import HouseDetailComponent from '../../components/HouseDetail/HouseDetailComponent';
import HouseDetailContent from '../../components/HouseDetail/HouseDetailContent';
import axiosInstance from '../../util/axiosInstance';

interface Props {
  houseId: number;
}

function HouseDetail(props: Props): JSX.Element {
  const { houseId } = props;
  // console.log(houseId);
  const [house, setHouse] = useState();
  console.log('디테일', house);
  useEffect(() => {
    axiosInstance
      .get(`houses/${houseId}`)
      .then((res) => {
        setHouse(res.data);
      })
      .catch((err) => console.log(err));
  }, [houseId]);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView removeClippedSubviews>
        <HouseDetailComponent />
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <HouseDetailContent />
        </View>
      </ScrollView>
    </View>
  );
}

export default HouseDetail;
