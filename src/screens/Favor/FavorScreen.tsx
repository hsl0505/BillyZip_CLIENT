import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import axiosInstance from '../../util/axiosInstance';
import MoreListEntry from '../../components/MainScreen/MoreListEntry';

interface Props {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function FavorScreen(props: Props): JSX.Element {
  const { navigation } = props;
  const [favHouses, setFavHouses] = useState();

  useEffect(() => {
    if (!favHouses) {
      axiosInstance
        .get('favs')
        .then((res) => {
          setFavHouses(res.data);
        })
        .catch((err) => console.log(err));
    }

    const subscribe = navigation.addListener('didFocus', () => {
      axiosInstance
        .get('favs')
        .then((res) => {
          setFavHouses(res.data);
        })
        .catch((err) => console.log(err));
    });

    return (): void => {
      subscribe.remove();
    };
  }, [favHouses, navigation]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20,
      }}
    >
      <Text
        style={{
          marginLeft: 15,
          marginTop: 25,
          marginBottom: 10,
          fontSize: 26,
          fontWeight: 'bold',
        }}
      >
        즐겨찾기
      </Text>
      {favHouses ? <MoreListEntry favHouses={favHouses} isFav="f" /> : <View />}
    </View>
  );
}

export default withNavigation(FavorScreen);
