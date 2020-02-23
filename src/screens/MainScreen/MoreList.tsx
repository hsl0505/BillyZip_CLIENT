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

function MoreList(props: Props): JSX.Element {
  const { navigation } = props;
  const part = navigation.getParam('part');
  const [houses, setHouses] = useState();
  const [isReady, setReady] = useState(false);

  let forTitle;

  switch (part) {
    case 'apart':
      forTitle = '아파트';
      break;
    case 'dandok':
      forTitle = '단독주택';
      break;
    case 'oneroom':
      forTitle = '원룸';
      break;
    case 'villa':
      forTitle = '빌라';
      break;
    case 'officetel':
      forTitle = '오피스텔';
      break;
    default:
      forTitle = '';
  }

  useEffect(() => {
    axiosInstance
      .get(`houses/part/${part}`)
      .then((res) => {
        setHouses(res.data);
        setReady(true);
      })
      .catch((err) => console.log(err));
  }, [part]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 25,
      }}
    >
      {isReady ? (
        <View>
          <Text
            style={{
              marginLeft: 15,
              marginTop: 25,
              marginBottom: 10,
              fontSize: 28,
              fontWeight: 'bold',
            }}
          >
            {forTitle}
          </Text>
          <MoreListEntry houses={houses} isFav="m" />
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

export default withNavigation(MoreList);
