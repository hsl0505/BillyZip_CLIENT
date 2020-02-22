import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

import axiosInstance from '../../../util/axiosInstance';

import SubscribeListComponent from '../../../components/UserInfo/Payment/SubscribeListComponent';

function SubscribeList(): JSX.Element {
  const [paymentList, setPaymentList] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    axiosInstance
      .get('payment')
      .then((res) => {
        setPaymentList(res.data);
        setReady(true);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log('페이먼트리스트 :: ', paymentList);
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {ready === false ? (
        <View />
      ) : (
        <View>
          <Card containerStyle={{ borderColor: 'purple' }}>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
                marginLeft: 20,
                marginRight: 20,
              }}
            >
              신청한 구독 리스트를 확인해보세요!
            </Text>
          </Card>

          <SubscribeListComponent paymentList={paymentList} />
        </View>
      )}
    </View>
  );
}

export default SubscribeList;
