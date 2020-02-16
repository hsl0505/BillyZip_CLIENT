import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, StyleSheet, Text } from 'react-native';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

interface Props {
  ele: {
    plan: string;
  };
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 0,
  },
});

function CurrentPlanComponent(props: Props): JSX.Element {
  const { ele } = props;

  const { plan } = ele;
  return (
    <View style={styles.container}>
      <MaterialIcons name="event-available" size={80} color="purple" />
      <Text
        style={{
          marginTop: 5,
          marginBottom: 20,
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        현재 구독 중인 모델의 플랜은 {plan} 입니다
      </Text>
    </View>
  );
}

export default withNavigation(CurrentPlanComponent);
