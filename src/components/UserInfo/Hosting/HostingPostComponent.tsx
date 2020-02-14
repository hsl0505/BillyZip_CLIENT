import React from 'react';
import { View, Text } from 'react-native';
import HostingImagePicker from './HostingImagePicker';

function HostingPostComponent(): JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginLeft: 15, marginVertical: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>호스팅</Text>
      </View>
      <HostingImagePicker />
    </View>
  );
}

export default HostingPostComponent;
