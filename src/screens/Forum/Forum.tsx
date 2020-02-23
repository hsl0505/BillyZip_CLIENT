import React, { useEffect, useState } from 'react';
import { View, AsyncStorage, Text, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import axiosInstance from '../../util/axiosInstance';

interface Props {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

interface Forum {
  id: number;
  hostName: string;
  hostId: number;
}

function Forum(props: Props): JSX.Element {
  const [forums, setForums] = useState([]);
  const [myId, setMyId] = useState();
  const [myName, setMyName] = useState();
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    const getMyId = async (): Promise<void> => {
      const getmyId = await AsyncStorage.getItem('userId');
      const getmyName = await AsyncStorage.getItem('userName');

      axiosInstance
        .post('forum/list', {
          myId: getmyId,
        })
        .then((res) => {
          setForums(res.data);
          setMyId(getmyId);
          setMyName(getmyName);
          setReady(true);
        });
    };

    getMyId();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {isReady ? (
        <View style={{ flex: 1 }}>
          <View style={{ marginTop: 40, marginLeft: 15 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 26 }}>
              참가중인 포럼 목록
            </Text>
          </View>
          <View style={{ marginTop: 20 }}>
            {forums.map((forum: Forum) => (
              <ListItem
                key={forum.id}
                title={`'${forum.hostName}' 호스트의 포럼입니다.`}
                bottomDivider
                topDivider
                chevron
                onPress={(): void => {
                  // hostId 넣어주기
                  props.navigation.navigate('Room', {
                    hostId: forum.hostId,
                    myId,
                    myName,
                  });
                }}
              />
            ))}
          </View>
        </View>
      ) : (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
}

export default withNavigation(Forum);
