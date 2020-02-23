import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';

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
      .catch((err) => {
        if (err.response.status === 404) {
          setPaymentList([]);
          setReady(true);
        }
      });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {ready === false ? (
        <View />
      ) : (
        <View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            removeClippedSubviews
          >
            <SubscribeListComponent paymentList={paymentList} />
          </ScrollView>
        </View>
      )}
    </View>
  );
}

export default SubscribeList;
