// import React, { useState, useEffect } from 'react';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import axiosInstance from '../../util/axiosInstance';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

function LogOut(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>결제 페이지</Text>
      <Button
        title="결제"
        onPress={(): void => {
          axiosInstance.post('payment', {
            subscribePlan,
            paymentDate,
            paymentOption,
          });
        }}
      />
    </View>
  );
}

export default LogOut;
