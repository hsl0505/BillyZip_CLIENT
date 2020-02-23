import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import axiosInstance from '../../util/axiosInstance';

interface Props {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

interface Application {
  id: number;
  status: string;
  house: {
    id: number;
    title: string;
  };
}

function Application(props: Props): JSX.Element {
  // 액시오스 받아서 셋스테이트하기
  // 스테이를 맵으로 렌더링하기
  // 리스트아이템 활용
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axiosInstance.get('application/my-application').then((res) => {
      console.log('신청리스트', res.data);
      setApplications(res.data);
    });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ marginTop: 40, marginLeft: 15 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 26, marginBottom: 10 }}>
          매물 신청 현황
        </Text>
      </View>
      {applications.map((application: Application) => (
        <ListItem
          key={application.id}
          leftIcon={
            <Feather
              name={application.status === 'wait' ? 'clock' : 'check'}
              size={28}
              color={application.status === 'wait' ? 'black' : 'green'}
            />
          }
          title={application.house.title}
          bottomDivider
          topDivider
          onPress={(): void => {
            // 매물로 이동하기
            props.navigation.navigate('HouseDetail', {
              houseId: application.house.id,
            });
          }}
        />
      ))}
    </View>
  );
}

export default withNavigation(Application);

// 서버에서 리스트 받아서 렌더링하기
// 매물 title / status, 누르면 매물로 이동하기
