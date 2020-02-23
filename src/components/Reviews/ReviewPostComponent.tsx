import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { Input, Button } from 'react-native-elements';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import axiosInstance from '../../util/axiosInstance';

interface Props {
  houseId: number;
  isFav: string;
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function ReviewPostComponent(props: Props): JSX.Element {
  const { houseId, isFav } = props;
  const [rating, setRating] = useState(3);
  const [comment, setComment] = useState();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 15,
      }}
    >
      <View style={{ marginTop: 45 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 35 }}>리뷰 등록하기</Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 23 }}>
          얼마나 만족하셨나요?
        </Text>
        <View
          style={{
            alignSelf: 'center',
            marginTop: 20,
          }}
        >
          <AirbnbRating
            reviews={[
              '" 정말 최악 "',
              '" 별로에요 "',
              '" 그럭저럭 괜찮아요 "',
              '" 좋아요! "',
              '" 최고입니다! "',
            ]}
            onFinishRating={(rat): void => setRating(rat)}
            reviewColor="#848484"
            reviewSize={16}
            selectedColor="purple"
            defaultRating={3}
          />
        </View>
        <View style={{ marginTop: 60 }}>
          <Text style={{ fontSize: 23, fontWeight: 'bold' }}>
            당신의 후기를 남겨주세요 !
          </Text>

          <View style={{ marginTop: 10, paddingBottom: 30 }}>
            <Input
              multiline
              placeholder="후기를 남겨주세요"
              onChangeText={(text): void => setComment(text)}
            />
          </View>
        </View>
      </View>
      <View>
        <Button
          title="등록하기"
          type="outline"
          titleStyle={{ color: 'purple' }}
          buttonStyle={{ borderWidth: 1, borderColor: 'purple' }}
          onPress={(): void => {
            axiosInstance
              .post(`houses/${houseId}/reivew`, {
                comment,
                rating,
              })
              .then(() => {
                Alert.alert('리뷰가 등록되었습니다');
                props.navigation.navigate(
                  isFav === 'f' ? 'FavorHouseDetail' : 'HouseDetail',
                  { houseId, isFav },
                );
              })
              .catch((err) => console.log(err));
          }}
        />
      </View>
    </View>
  );
}

export default withNavigation(ReviewPostComponent);
