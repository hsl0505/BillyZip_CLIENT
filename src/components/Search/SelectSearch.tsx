import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { Input } from 'react-native-elements';

import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';

import axiosInstance from '../../util/axiosInstance';

interface Props {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function SelectSearch(props: Props): JSX.Element {
  const [searchWord, setWord] = useState();
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
      <View>
        <Input
          placeholder={`검색할 내용을 입력해 주세요. ${'\n'}예 : 강남 시티뷰가 좋은 집`}
          textAlignVertical="top"
          clearButtonMode="always"
          label="Quick Search"
          labelStyle={{
            marginLeft: 8,
            color: 'black',
            fontSize: 24,
            marginBottom: 10,
          }}
          onChangeText={(text): void => setWord(text)}
          inputContainerStyle={{ marginHorizontal: 15 }}
          rightIcon={
            <Feather
              name="search"
              size={26}
              style={{ marginRight: 15 }}
              onPress={(): void => {
                axiosInstance
                  .post('houses/search', {
                    searchWord,
                  })
                  .then((res) => {
                    props.navigation.navigate('SearchResult', {
                      data: res.data,
                    });
                  })
                  .catch((err) => {
                    if (
                      err.response.data.error === 'houses가 존재하지 않습니다.'
                    ) {
                      Alert.alert('검색하신 결과가 존재하지않습니다');
                    }
                  });
              }}
            />
          }
        />
      </View>
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
