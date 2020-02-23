/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import axiosInstance from '../../util/axiosInstance';

function Application(props: any): JSX.Element {
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

  console.log('셋된 신청리스트11', applications);

  return (
    <View>
      {applications.map((application: any) => (
        <ListItem
          key={application.id}
          title={`${application.status} / ${application.house.title}`}
          bottomDivider
          onPress={() => {
              // 매물로 이동하기
              props.navigation.navigate('HouseDetail', {houseId: application.house.id});
          }}
        />
      ))}
    </View>
  );
}

export default withNavigation(Application);

// 서버에서 리스트 받아서 렌더링하기
// 매물 title / status, 누르면 매물로 이동하기
