import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import axiosInstance from '../../util/axiosInstance';

import MoreListEntry from '../../components/MainScreen/MoreListEntry';

interface Props {
  part: string;
}

function MoreList(props: Props): JSX.Element {
  const { part } = props;
  const [houses, setHouses] = useState();

  useEffect(() => {
    axiosInstance
      .get(`houses/part/:${part}`)
      .then((res) => setHouses(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <MoreListEntry houses={houses} />
    </View>
  );
}

export default MoreList;
