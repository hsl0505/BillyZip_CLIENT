import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { Card, Overlay, Button } from 'react-native-elements';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import axiosInstance from '../../util/axiosInstance';

interface Props {
  userId: number;
  houseId: number;
  item: {
    id: number;
    comment: string;
    rating: number;
    createdAt: string;
    user: {
      id: number;
      name: string;
    };
  };
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function ReviewCardComponent(props: Props): JSX.Element {
  const { item, userId, houseId } = props;
  const { comment, rating, createdAt, user } = item;
  const reviewId = item.id;
  const { name, id } = user;
  const [isVisible, setVisible] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        marginTop: 20,
        marginBottom: 35,
        marginHorizontal: 20,
      }}
    >
      <Card>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
            {name} 님의 리뷰
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 10,
            }}
          >
            <AntDesign name="star" size={17} color="purple" />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 17,
                marginLeft: 3,
                marginRight: 20,
              }}
            >
              {rating}
            </Text>
            {id === Number(userId) ? (
              <FontAwesome
                name="trash-o"
                size={26}
                onPress={(): void => {
                  setVisible(true);
                }}
              />
            ) : (
              <View />
            )}
          </View>
        </View>
        <View style={{ marginTop: 5 }}>
          <Text style={{ color: '#A4A4A4' }}>{`${createdAt.slice(
            0,
            4,
          )}년 ${createdAt.slice(5, 7)}월 ${createdAt.slice(8, 10)}일`}</Text>
        </View>
        <View style={{ marginTop: 30, marginBottom: 50 }}>
          <Text style={{ fontSize: 18 }}>{comment}</Text>
        </View>
      </Card>

      <Overlay
        isVisible={isVisible}
        onBackdropPress={(): void => setVisible(false)}
        height={100}
        width={220}
      >
        <View style={{ marginHorizontal: 10 }}>
          <View style={{ marginTop: 5 }}>
            <Text>리뷰를 삭제하시겠습니까?</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
            }}
          >
            <Button
              title="삭제"
              type="clear"
              onPress={(): void => {
                axiosInstance
                  .delete(`houses/${houseId}/review/${reviewId}`)
                  .then(() => {
                    setVisible(false);
                    Alert.alert('리뷰가 삭제 되었습니다');
                    props.navigation.goBack();
                  });
              }}
            />
            <Button
              title="취소"
              type="clear"
              onPress={(): void => {
                setVisible(false);
              }}
            />
          </View>
        </View>
      </Overlay>
    </View>
  );
}

export default withNavigation(ReviewCardComponent);
