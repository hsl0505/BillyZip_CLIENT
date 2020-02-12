// import React, { useState, useEffect } from 'react';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

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
          console.log('결제 페이지');
        }}
      />
    </View>
  );
}

export default LogOut;
