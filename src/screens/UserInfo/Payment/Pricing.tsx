// import React, { useState, useEffect } from 'react';
import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Card } from 'react-native-elements';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
});

function Pricing(props: Partial<NavigationInjectedProps>): JSX.Element {
  const planList = ['30', '50', '70', '100', '150'];
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 5,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
        }}
      >
        <AntDesign name="check" size={20} />
        구독하고 싶은 플랜을 선택하세요
      </Text>
      {planList.map((plan, i) => (
        <Card key={i.toString()}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              {plan}만원/월
            </Text>
            <Button
              title="결제"
              color="purple"
              onPress={(): void => {
                if (props.navigation) {
                  props.navigation.navigate('Payment', {
                    subscribePlan: plan,
                  });
                }
              }}
            />
          </View>
        </Card>
      ))}
    </View>
  );
}

export default withNavigation(Pricing);
