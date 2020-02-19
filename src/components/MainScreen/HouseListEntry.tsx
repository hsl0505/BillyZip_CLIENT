import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

import Apartment from './HouseLIstEntry/Apartment';
import DetachedHouse from './HouseLIstEntry/DetachedHouse';
import OneRoom from './HouseLIstEntry/OneRoom';
import Villa from './HouseLIstEntry/Villa';
import Officetel from './HouseLIstEntry/Officetel';

interface Props {
  rand: Ele[][];
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

interface Ele {
  id: number;
  type: string;
  title: string;
  description: string;
  images: Images[];
  avgRating?: number;
}

interface Images {
  filePath: string | undefined;
}

function HouseListEntry(props: Props): JSX.Element {
  const { rand } = props;
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
          <Text style={{ fontSize: 22, marginLeft: 10 }}>아파트</Text>
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
            onPress={(): void => {
              props.navigation.navigate('MoreList', { part: 'apart' });
            }}
          />
        </View>
        <Apartment apart={rand[0]} />
      </View>
      <View style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 15,
            marginRight: 15,
          }}
        >
          <Text style={{ fontSize: 22, marginLeft: 10 }}>원룸</Text>
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
            onPress={(): void => {
              props.navigation.navigate('MoreList', { part: 'oneroom' });
            }}
          />
        </View>
        <OneRoom oneroom={rand[4]} />
      </View>
      <View style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 15,
            marginRight: 15,
          }}
        >
          <Text style={{ fontSize: 22, marginLeft: 10 }}>단독주택</Text>
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
            onPress={(): void => {
              props.navigation.navigate('MoreList', {
                part: 'dandok',
              });
            }}
          />
        </View>
        <DetachedHouse dandok={rand[1]} />
      </View>
      <View style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 15,
            marginRight: 15,
          }}
        >
          <Text style={{ fontSize: 22, marginLeft: 10 }}>빌라</Text>
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
            onPress={(): void => {
              props.navigation.navigate('MoreList', { part: 'villa' });
            }}
          />
        </View>
        <Villa villa={rand[3]} />
      </View>
      <View style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 15,
            marginRight: 15,
          }}
        >
          <Text style={{ fontSize: 22, marginLeft: 10 }}>오피스텔</Text>
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
            onPress={(): void => {
              props.navigation.navigate('MoreList', { part: 'officetel' });
            }}
          />
        </View>
        <Officetel officetel={rand[2]} />
      </View>
    </View>
  );
}

export default withNavigation(HouseListEntry);
