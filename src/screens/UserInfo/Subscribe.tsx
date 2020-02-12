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
    <View>
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>구독 페이지</Text>
        <Button
          title="구독"
          onPress={(): void => {
            console.log('구독 페이지');
          }}
        />
      </View>
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>구독 페이지</Text>
        <Button
          title="구독"
          onPress={(): void => {
            console.log('구독 페이지');
          }}
        />
      </View>
    </View>
  );
}

export default LogOut;
