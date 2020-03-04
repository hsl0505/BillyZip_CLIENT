import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import { ListItem, Overlay, Button, Avatar } from 'react-native-elements';

import { AntDesign } from '@expo/vector-icons';
import axiosInstance from '../../../util/axiosInstance';

interface Props {
  applyList: {
    apply: AL[];
    images: Img[];
  };
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

interface AL {
  id: number;
  house: House;
  user: User;
}

interface House {
  id: number;
  plan: string;
  type: string;
  title: string;
  adminDistrict: string;
  startTime: number;
  endTime: number;
}

interface User {
  name: string;
  mobile: string;
  gender: string;
}

interface Img {
  filePath: string;
  fileName: string;
  mainImage: boolean;
}

function HostingApplyComponent(props: Props): JSX.Element {
  const { applyList } = props;
  const { apply, images } = applyList;
  const [isVisible, setVisible] = useState(false);
  const [selectedHost, setSelecHost] = useState();

  return (
    <View style={{ flex: 1, marginHorizontal: 15 }}>
      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>구독 신청 현황</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        {apply.map((item, idx) => (
          <ListItem
            key={item.house.id}
            title={item.house.title}
            subtitle={item.house.adminDistrict}
            topDivider
            bottomDivider
            leftAvatar={{
              source: {
                uri: images[idx].filePath,
              },
            }}
            rightElement={
              <View>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'purple',
                    }}
                  >
                    구독 신청 현황
                  </Text>
                  <Text style={{ alignSelf: 'center', marginTop: 5 }}>
                    {item.user.name} 님
                  </Text>
                </View>
                <Overlay
                  isVisible={isVisible && idx === selectedHost}
                  onBackdropPress={(): void => {
                    setSelecHost(undefined);
                    setVisible(false);
                  }}
                  height={450}
                >
                  <View style={{ marginHorizontal: 10 }}>
                    <View>
                      <View>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontSize: 22,
                            color: 'purple',
                          }}
                        >
                          호스팅 정보
                        </Text>
                      </View>
                      <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Avatar
                          rounded
                          size="large"
                          source={{ uri: images[idx].filePath }}
                        />
                        <View
                          style={{
                            flexDirection: 'column',
                            marginLeft: 10,
                            justifyContent: 'center',
                          }}
                        >
                          <Text
                            style={{
                              fontWeight: 'bold',
                              fontSize: 18,
                              width: 150,
                            }}
                          >
                            {item.house.title}
                          </Text>
                          <Text style={{ marginTop: 2, color: '#A4A4A4' }}>
                            {item.house.adminDistrict}
                          </Text>
                        </View>
                      </View>
                      <View style={{ marginTop: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                          {item.house.type.toUpperCase()} / {item.house.plan}{' '}
                          Plan
                        </Text>

                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontSize: 14,
                            marginTop: 5,
                          }}
                        >
                          최소 거주 기간 : {item.house.startTime} 일
                        </Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
                          최대 거주 기간 : {item.house.endTime} 일 (약{' '}
                          {Math.floor(item.house.endTime / 7)}주)
                        </Text>
                      </View>
                    </View>
                    <View style={{ marginTop: 50 }}>
                      <View>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontSize: 22,
                            color: 'purple',
                          }}
                        >
                          신청한 유저 정보
                        </Text>
                      </View>
                      <View style={{ marginTop: 10 }}>
                        <View
                          style={{ flexDirection: 'row', alignItems: 'center' }}
                        >
                          <View>
                            <Avatar
                              rounded
                              size="medium"
                              icon={{ name: 'user', type: 'font-awesome' }}
                            />
                          </View>
                          <View style={{ marginLeft: 10 }}>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}
                            >
                              <Text
                                style={{
                                  fontWeight: 'bold',
                                  fontSize: 18,
                                  marginRight: 10,
                                }}
                              >
                                {item.user.name} 님
                              </Text>
                              <AntDesign
                                name={
                                  item.user.gender === 'Male' ? 'man' : 'woman'
                                }
                                size={18}
                              />
                            </View>

                            {/* <Text style={{ marginTop: 3 }}>
                              {item.user.mobile.slice(0, 3)}-
                              {item.user.mobile.slice(3, 7)}-
                              {item.user.mobile.slice(7)}
                            </Text> */}
                          </View>
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 40,
                        justifyContent: 'space-around',
                      }}
                    >
                      <Button
                        title="구독 수락하기"
                        titleStyle={{ color: 'purple' }}
                        type="outline"
                        buttonStyle={{ borderWidth: 1, borderColor: 'purple' }}
                        onPress={(): void => {
                          setSelecHost(undefined);
                          setVisible(false);
                          axiosInstance
                            .put('application', {
                              applyId: item.id,
                              agree: true,
                              reject: false,
                            })
                            .then(() => {
                              Alert.alert(
                                `${item.user.name} 님의 구독 요청을 수락했습니다`,
                              );
                              props.navigation.goBack();
                            })
                            .catch((err) => console.log(err));
                        }}
                      />
                      <Button
                        title="구독 거부하기"
                        titleStyle={{ color: 'purple' }}
                        type="outline"
                        buttonStyle={{ borderWidth: 1, borderColor: 'purple' }}
                        onPress={(): void => {
                          setSelecHost(undefined);
                          setVisible(false);
                          axiosInstance
                            .put('application', {
                              applyId: item.id,
                              agree: false,
                              reject: true,
                            })
                            .then(() => {
                              Alert.alert(
                                `${item.user.name} 님의 구독 요청을 거절했습니다`,
                              );
                              props.navigation.goBack();
                            })
                            .catch((err) => console.log(err));
                        }}
                      />
                    </View>
                  </View>
                </Overlay>
              </View>
            }
            onPress={(): void => {
              setSelecHost(idx);
              setVisible(true);
            }}
          />
        ))}
      </View>
    </View>
  );
}

export default withNavigation(HostingApplyComponent);
