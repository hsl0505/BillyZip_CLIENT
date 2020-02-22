import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ListItem, Overlay, Button } from 'react-native-elements';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

interface Props {
  myHosting: MH[];
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

interface MH {
  id: string;
  title: string;
  adminDistrict: string;
  status: boolean;
  display: boolean;
  images: Img[];
}

interface Img {
  filePath: string;
  fileName: string;
  mainImage: boolean;
}

function HostingManagementComponent(props: Props): JSX.Element {
  const { myHosting } = props;
  const [isVisible, setVisible] = useState(false);
  const [editId, setEditId] = useState();

  return (
    <View style={{ flex: 1, marginHorizontal: 15 }}>
      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
          나의 호스팅 현황
        </Text>
      </View>
      <View style={{ marginTop: 10 }}>
        {myHosting.map((item) => (
          <ListItem
            key={item.id}
            title={item.title}
            subtitle={item.adminDistrict}
            topDivider
            bottomDivider
            rightElement={
              <View>
                <View style={{ alignItems: 'center' }}>
                  <Text style={{ color: item.status ? 'red' : 'green' }}>
                    {item.status ? '이용 중' : '이용 가능'}
                  </Text>
                  <Text
                    style={{
                      marginTop: 3,
                      color: item.display ? 'green' : '#D8D8D8',
                    }}
                  >
                    {item.display ? '공개' : '비공개'}
                  </Text>
                </View>
              </View>
            }
            leftAvatar={{
              source: {
                uri: item.images.filter((ele) => {
                  return ele.mainImage;
                })[0]
                  ? item.images.filter((ele) => {
                      return ele.mainImage;
                    })[0].filePath
                  : item.images[0].filePath,
              },
              overlayContainerStyle: { backgroundColor: '#fff' },
            }}
            onPress={(): void => {
              setEditId(item.id);
              setVisible(true);
            }}
          />
        ))}
      </View>
      <Overlay
        isVisible={isVisible}
        height={100}
        width={220}
        onBackdropPress={(): void => setVisible(false)}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ alignSelf: 'center', fontSize: 15, marginTop: 10 }}>
            호스팅을 수정하시겠습니까?
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
              title="수정"
              onPress={(): void => {
                setVisible(false);
                props.navigation.navigate('HostingEdit', { houseId: editId });
              }}
              type="clear"
            />
            <Button
              title="취소"
              onPress={(): void => setVisible(false)}
              type="clear"
            />
          </View>
        </View>
      </Overlay>
    </View>
  );
}

export default withNavigation(HostingManagementComponent);
