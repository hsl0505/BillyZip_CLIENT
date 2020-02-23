import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Input, Button } from 'react-native-elements';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import axiosInstance from '../../util/axiosInstance';

const LATITUDE = 35.39673755350146;
const LONGITUDE = 127.71844625473022;
const LATITUDE_DELTA = 4;
const LONGITUDE_DELTA = 4;

const styles = StyleSheet.create({
  mapStyle: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});

interface Props {
  data: House[];
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

interface House {
  id: number;
  title: string;
  location: string[];
}

function MapSearchForm(props: Props): JSX.Element {
  const { data } = props;

  const housesData = data.map((house: House) => {
    return {
      id: house.id,
      title: house.title,
      coordinate: {
        latitude: Number(house.location[0]),
        longitude: Number(house.location[1]),
      },
    };
  });

  const [searchWord, setSearchWord] = useState('');
  const [markers, setMarkers] = useState(housesData);

  return (
    <View>
      <View style={{ marginTop: 40 }}>
        <Input
          placeholder={`검색할 내용을 입력해 주세요. ${'\n'}예 : 강남 시티뷰가 좋은 집`}
          textAlignVertical="top"
          clearButtonMode="always"
          label="지도 검색"
          labelStyle={{
            marginLeft: 8,
            color: 'black',
            fontSize: 24,
            marginBottom: 10,
          }}
          onChangeText={(text): void => setSearchWord(text)}
          inputContainerStyle={{ marginHorizontal: 15 }}
        />
        <Button
          title="검색하기"
          titleStyle={{ color: 'purple' }}
          type="clear"
          onPress={(): void => {
            axiosInstance
              .post('houses/search', {
                searchWord,
              })
              .then((res) => {
                const searchHouse = res.data.map((house: House) => {
                  return {
                    id: house.id,
                    title: house.title,
                    coordinate: {
                      latitude: Number(house.location[0]),
                      longitude: Number(house.location[1]),
                    },
                  };
                });
                setMarkers(searchHouse);
              });
          }}
          buttonStyle={{
            marginTop: 20,
            marginBottom: 20,
            width: 200,
            alignSelf: 'center',
          }}
        />
      </View>
      <View style={{ borderTopWidth: 0.2 }}>
        <MapView
          style={styles.mapStyle}
          provider="google"
          showsUserLocation
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              coordinate={marker.coordinate}
              title={marker.title}
              identifier={String(marker.id)}
              onPress={(e): void => {
                console.log(e.nativeEvent);
                axiosInstance.get(`houses/${e.nativeEvent.id}`).then((res) => {
                  props.navigation.navigate('HouseDetail', {
                    houseId: res.data.id,
                    isFav: res.data.favsNow,
                  });
                });
              }}
            />
          ))}
        </MapView>
      </View>
    </View>
  );
}
export default withNavigation(MapSearchForm);
