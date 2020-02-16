import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import MyInfoList from '../../../components/UserInfo/MyInfo/MyInfoList';
import axiosInstance from '../../../util/axiosInstance';

interface Props {
  number: number;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

function MyInfo(props: Props): JSX.Element {
  const { number } = props;
  const [myInfo, setMyInfo] = useState({});
  useEffect(() => {
    axiosInstance
      .get(`users/${number}/myInfo`)
      .then((res) => setMyInfo(res.data))
      .catch((err) => console.log(err));
  }, [number]);

  return (
    <View style={styles.container}>
      <MyInfoList myInfo={myInfo} />
    </View>
  );
}

export default MyInfo;
