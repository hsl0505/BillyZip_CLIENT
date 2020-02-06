import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

import Apartment from './HouseLIstEntry/Apartment';
import DetachedHouse from './HouseLIstEntry/DetachedHouse';
import OneRoom from './HouseLIstEntry/OneRoom';
import Villa from './HouseLIstEntry/Villa';
import Officetel from './HouseLIstEntry/Officetel';

function HouseListEntry(props: Partial<NavigationInjectedProps>): JSX.Element {
  return (
    <View style={{ marginBottom: 15 }}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 15,
            marginRight: 15,
          }}
        >
          <Text style={{ fontSize: 18 }}>아파트</Text>
          <Button
            title="More"
            type="outline"
            buttonStyle={{
              borderColor: 'purple',
              paddingTop: 5,
              paddingBottom: 5,
              borderWidth: 1.5,
            }}
            titleStyle={{ color: 'purple' }}
            onPress={(): boolean => {
              if (props.navigation) {
                return props.navigation.navigate('MoreList');
              }
              return false;
            }}
          />
        </View>
        <Apartment />
      </View>
      <View>
        <Text style={{ fontSize: 18, marginLeft: 10 }}>원룸</Text>
        <OneRoom />
      </View>
      <View>
        <Text style={{ fontSize: 18, marginLeft: 10 }}>단독주택</Text>
        <DetachedHouse />
      </View>
      <View>
        <Text style={{ fontSize: 18, marginLeft: 10 }}>빌라</Text>
        <Villa />
      </View>
      <View>
        <Text style={{ fontSize: 18, marginLeft: 10 }}>오피스텔</Text>
        <Officetel />
      </View>
    </View>
  );
}

export default withNavigation(HouseListEntry);
