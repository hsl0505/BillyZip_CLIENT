import React from 'react';
import { View } from 'react-native';
import HostingComponent from '../../../components/UserInfo/Hosting/HostingComponent';

function Hosting(): JSX.Element {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <HostingComponent />
    </View>
  );
}

export default Hosting;
