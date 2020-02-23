/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { ListItem, Overlay, Button } from 'react-native-elements';
import axiosInstance from '../../util/axiosInstance';

function Application(props: any): JSX.Element {
  const [applications, setApplications] = useState([]);
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    axiosInstance
      .get('application/my-application')
      .then((res) => {
        console.log('신청리스트', res.data);
        setApplications(res.data);
      })
      .catch((err) => {
        console.log(err);
        setApplications([]);
      });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {applications.length > 0 ? (
        applications.map((application: any) => (
          <ListItem
            key={application.id}
            title={`${application.status} / ${application.house.title}`}
            bottomDivider
            onPress={() => {
              // 매물로 이동하기
              props.navigation.navigate('HouseDetail', {
                houseId: application.house.id,
              });
            }}
          />
        ))
      ) : (
        <View>
          <Overlay
            isVisible={isVisible}
            height={100}
            width={280}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{ alignSelf: 'center', fontSize: 15, marginTop: 10 }}
              >
                신청한 매물이 존재하지 않습니다.
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'space-around',
                }}
              >
                <Button
                  title="확인"
                  onPress={(): void => {
                    setVisible(false);
                    props.navigation.navigate('UserInfo');
                  }}
                  type="clear"
                />
              </View>
            </View>
          </Overlay>
        </View>
      )}
    </View>
  );
}

export default withNavigation(Application);
