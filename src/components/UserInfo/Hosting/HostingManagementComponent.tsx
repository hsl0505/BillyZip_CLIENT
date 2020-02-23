import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { ListItem, Overlay, Button } from 'react-native-elements';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import axiosInstance from '../../../util/axiosInstance';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

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
  const [isLongVisible, setLongVisible] = useState(false);
  const [selectHost, setSelectHost] = useState();

  return (
    <View style={{ flex: 1, marginHorizontal: 15 }}>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
          }}
        >
          나의 호스팅
        </Text>
      </View>
      <View style={{ marginTop: 10 }}>
        {myHosting.map((item, idx) => (
          <ListItem
            key={item.id}
            title={item.title}
            subtitle={item.adminDistrict}
            topDivider
            bottomDivider
            rightElement={
              <View>
                <View>
                  <Text
                    style={{
                      color: item.status ? 'red' : 'green',
                      alignSelf: 'center',
                    }}
                  >
                    {item.status ? '이용 중' : '이용 가능'}
                  </Text>
                  <Text
                    style={{
                      marginTop: 3,
                      color: item.display ? 'green' : '#D8D8D8',
                      alignSelf: 'center',
                    }}
                  >
                    {item.display ? '공개' : '비공개'}
                  </Text>
                </View>

                <Overlay
                  isVisible={isLongVisible && idx === selectHost}
                  onBackdropPress={(): void => {
                    setSelectHost(undefined);
                    setLongVisible(false);
                  }}
                  width={260}
                  height={130}
                >
                  <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
                      {`"${item.title}"`}
                    </Text>
                    <Text>{'\n'}위 호스팅을 삭제하시겠습니까?</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 10,
                        justifyContent: 'space-around',
                      }}
                    >
                      <Button
                        title="삭제"
                        type="clear"
                        onPress={(): void => {
                          if (item.status) {
                            Alert.alert('거주중인 호스팅은 삭제할 수 없습니다');
                            setSelectHost(undefined);
                            setLongVisible(false);
                          } else {
                            axiosInstance
                              .delete(`houses/${item.id}`)
                              .then(() => {
                                setSelectHost(undefined);
                                setLongVisible(false);
                                Alert.alert('햬당 호스팅이 삭제되었습니다!');
                                props.navigation.goBack();
                              })
                              .catch((err) => console.log(err));
                          }
                        }}
                      />
                      <Button
                        title="취소"
                        type="clear"
                        onPress={(): void => {
                          setSelectHost(undefined);
                          setLongVisible(false);
                        }}
                      />
                    </View>
                  </View>
                </Overlay>
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
            onLongPress={(): void => {
              setSelectHost(idx);
              setLongVisible(true);
            }}
          />
        ))}
      </View>
      <Overlay
        isVisible={isVisible}
        height={150}
        width={220}
        onBackdropPress={(): void => setVisible(false)}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ alignSelf: 'center', fontSize: 15, marginTop: 10 }}>
            호스팅을 수정하시겠습니까?{'\n'}
            {'\n'}호스팅을 삭제하려면 길게{'\n'}
            눌러주세요
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
