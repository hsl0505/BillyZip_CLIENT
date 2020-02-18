import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import MyInfoList from '../../../components/UserInfo/MyInfo/MyInfoList';
import axiosInstance from '../../../util/axiosInstance';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

function MyInfo(): JSX.Element {
  const [myInfo, setMyInfo] = useState({});
  useEffect(() => {
    axiosInstance
      .get(`users/myInfo`)
      .then((res) => setMyInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <MyInfoList myInfo={myInfo} />
    </View>
  );
}

export default MyInfo;
