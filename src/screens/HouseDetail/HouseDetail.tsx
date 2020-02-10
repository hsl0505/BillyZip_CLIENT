import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import HouseDetailComponent from '../../components/HouseDetail/HouseDetailComponent';

function HouseDetail(): JSX.Element {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <HouseDetailComponent />
      <ScrollView removeClippedSubviews>
        <View
          style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center' }}
        >
          <Text>내용</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default HouseDetail;
