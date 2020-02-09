import React from 'react';
import { View, Text } from 'react-native';
import RecommendEntry from './RecommendEntry';

interface Props {
  rank: undefined | object[];
}

function Recommend(props: Props): JSX.Element {
  const { rank } = props;
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 24, marginTop: 10, marginLeft: 15 }}>
          BillyZip이 추천하는 House
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <RecommendEntry rank={rank} />
      </View>
    </View>
  );
}

export default Recommend;
