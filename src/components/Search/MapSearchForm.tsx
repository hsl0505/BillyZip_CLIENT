import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Input, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import axiosInstance from '../../util/axiosInstance';

// const { width, height } = Dimensions.get('window');
// const ASPECT_RATIO = width / height;
const LATITUDE = 35.39673755350146;
const LONGITUDE = 127.71844625473022;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const LATITUDE_DELTA = 4;
const LONGITUDE_DELTA = 4;

function MapSearchForm(props: any): JSX.Element {
  const styles = StyleSheet.create({
    mapStyle: {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
    },
  });

  const { data } = props;

  const housesData = data.map((house: any) => {
    return {
      id: house.id,
      title: house.title,
      coordinate: {
        latitude: Number(house.location[0]),
        longitude: Number(house.location[1]),
      },
    };
  });

  const [searchWord, setSearchWord]: any = useState();
  const [markers, setMarkers] = useState(housesData);

  useEffect(() => {
    console.log('렌더링~!');
  });

  const getLocationFunc = async () => {
    // 위치정보 허락
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      return console.log('error');
    }
    const gpsServiceStatus = await Location.hasServicesEnabledAsync();
    if (gpsServiceStatus) {
      const currentLocation = await Location.getCurrentPositionAsync({});
      return console.log('currentLocation', currentLocation);
    }

    // 좌표로 지역정보(주소 등) 얻기
    // const address = await Location.reverseGeocodeAsync({
    //   latitude: location.latitude,
    //   longitude: location.longitude,
    // });
    // console.log('주소 얻기 ', address);
    // [
    //   Object {
    //     "city": "Yongsan-gu",
    //     "country": "South Korea",
    //     "isoCountryCode": "KR",
    //     "name": "Itaewon2(i)-dong",
    //     "postalCode": null,
    //     "region": "Seoul",
    //     "street": null,
    //   },
    // ]

    // setRegion({latitude: location.coords.latitude, longitude: location.coords.longitude});

    // const test = getRegionForCoordinates(37.785834, -122.406417, 5);
  };

  getLocationFunc();

  return (
    <View>
      <View>
        <Input
          placeholder="검색할 내용을 입력해 주세요. 예: 강남 시티뷰가 좋은 집"
          label="검색"
          labelStyle={{ alignSelf: 'center' }}
          onChangeText={(text): void => setSearchWord(text)}
        />
        <Button
          title="검색하기"
          type="solid"
          onPress={(): void => {
            axiosInstance
              .post('houses/search', {
                searchWord,
              })
              .then((res) => {
                console.log('검색 결과', res.data);
                const searchHouse = res.data.map((house: any) => {
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
        />
      </View>
      <View>
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
          onPress={(e) => console.log(e.nativeEvent)}
        >
          {markers.map(
            (marker: {
              key: number;
              id: number;
              coordinate: { latitude: number; longitude: number };
              title: string;
            }) => (
              <Marker
                key={marker.id}
                coordinate={marker.coordinate}
                title={marker.title}
                identifier={String(marker.id)}
                onPress={(e) => {
                  console.log(e.nativeEvent);
                  axiosInstance
                    .get(`houses/${e.nativeEvent.id}`)
                    .then((res) => {
                      console.log('res.data ???  ', res.data);
                    });

                  // 아래 navigate에 옵션으로 위에서 받은 res.data를 주기
                  props.navigation.navigate('HouseDetail');
                }}
              />
            ),
          )}
        </MapView>
      </View>
    </View>
  );
}
export default withNavigation(MapSearchForm);
