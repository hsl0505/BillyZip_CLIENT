import React from 'react';
import { View, Text } from 'react-native';

import RecommendEntry from './RecommendEntry';

function Recommend(): JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 24, marginTop: 10, marginLeft: 10 }}>
          BillyZip이 추천하는 House
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <RecommendEntry />
      </View>
    </View>
  );
}

export default Recommend;
