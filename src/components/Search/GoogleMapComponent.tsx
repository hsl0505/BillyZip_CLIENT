import React from 'react';
import { View, Text } from 'react-native';

function GoogleMapComponent(props: any): JSX.Element {
  const { data } = props;
  console.log('GoogleMapComponenet props ', data);
  // 모든 매물 확인함 !
  return (
    <View>
      <Text>지도 컴포넌트</Text>
    </View>
  );
}

export default GoogleMapComponent;
