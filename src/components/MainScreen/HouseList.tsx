import React from 'react';
import { View, Text } from 'react-native';
import HouseListEntry from './HouseListEntry';

function HouseList(): JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text style={{ fontSize: 24, marginTop: 10, marginLeft: 15 }}>
          House List
        </Text>
      </View>
      <View>
        <HouseListEntry />
      </View>
    </View>
  );
}

export default HouseList;
