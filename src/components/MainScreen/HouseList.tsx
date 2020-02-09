import React from 'react';
import { View, Text } from 'react-native';
import HouseListEntry from './HouseListEntry';

interface Props {
  rand: undefined | object[];
}

function HouseList(props: Props): JSX.Element {
  const { rand } = props;
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text style={{ fontSize: 24, marginTop: 10, marginLeft: 15 }}>
          House List
        </Text>
      </View>
      <View>
        <HouseListEntry rand={rand} />
      </View>
    </View>
  );
}

export default HouseList;
