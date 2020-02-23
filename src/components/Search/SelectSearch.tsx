import React from 'react';
import { View, Text } from 'react-native';
// import { Button } from 'react-native-elements';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import axiosInstance from '../../util/axiosInstance';

interface Props {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function SelectSearch(props: Props): JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        marginTop: 15,
      }}
    >
      <Text style={{ marginHorizontal: 15, fontSize: 24, fontWeight: 'bold' }}>
        검색하기
      </Text>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={(): void => {
          props.navigation.navigate('NormalSearch');
        }}
      >
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',

            width: 200,
            height: 200,
            alignSelf: 'center',
          }}
        >
          <AntDesign name="search1" size={80} />
          <Text style={{ fontWeight: 'bold', fontSize: 24 }}>상세 검색</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.9}
        onPress={(): void => {
          axiosInstance.get('houses/all').then((res) => {
            props.navigation.navigate('MapSearch', { data: res.data });
          });
        }}
      >
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',

            width: 200,
            height: 200,
            alignSelf: 'center',
          }}
        >
          <FontAwesome name="map-o" size={80} />
          <Text style={{ fontWeight: 'bold', fontSize: 24, marginTop: 5 }}>
            지도 검색
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default withNavigation(SelectSearch);
