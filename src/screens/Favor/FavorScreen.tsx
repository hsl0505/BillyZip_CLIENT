import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
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
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    if (!favHouses) {
      axiosInstance
        .get('favs')
        .then((res) => {
          setFavHouses(res.data);
          setReady(true);
        })
        .catch((err) => console.log(err));
    }

    const subscribe = navigation.addListener('didFocus', () => {
      axiosInstance
        .get('favs')
        .then((res) => {
          setFavHouses(res.data);
          setReady(true);
        })
        .catch((err) => console.log(err));
    });

    return (): void => {
      console.log('여기언제실행?');
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
      {isReady ? (
        <View>
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
          {favHouses ? (
            <MoreListEntry favHouses={favHouses} isFav="f" />
          ) : (
            <View />
          )}
        </View>
      ) : (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
}

export default withNavigation(FavorScreen);
