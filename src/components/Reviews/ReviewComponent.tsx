import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, AsyncStorage } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import ReviewCardComponent from './ReviewCardComponent';

interface Props {
  avgRating: number;
  reviews: Rv[];
  houseId: number;
  isFav: string;
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

interface Rv {
  id: number;
  comment: string;
  rating: number;
  createdAt: string;
  user: {
    id: number;
    name: string;
    gender: string;
  };
}

function ReviewComponent(props: Props): JSX.Element {
  const { avgRating, reviews, houseId, isFav } = props;
  const reviewLength = reviews.length;
  const [userId, setUserId] = useState();
  const [isReady, setReady] = useState(false);

  async function gerUserId(): Promise<void> {
    const userIdGet = await AsyncStorage.getItem('userId');
    if (userIdGet) {
      setUserId(userIdGet);
      setReady(true);
    }
  }

  useEffect(() => {
    gerUserId();
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 35, fontWeight: 'bold' }}>후기</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 15,
          marginHorizontal: 20,
          alignItems: 'center',
          paddingBottom: 15,
          borderBottomWidth: 1,
          borderBottomColor: '#D8D8D8',
        }}
      >
        <AntDesign name="star" size={20} color="green" />
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 5 }}>
          {avgRating}
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 25 }}>
          총 {reviewLength}개의 리뷰
        </Text>
        <View style={{ marginLeft: 30 }}>
          <Button
            title="리뷰 등록하기"
            type="clear"
            titleStyle={{ color: 'purple' }}
            onPress={(): void => {
              props.navigation.navigate(
                isFav === 'f' ? 'ReviewPostScreen' : 'ReviewPostScreen',
                { houseId, isFav },
              );
            }}
          />
        </View>
      </View>

      {isReady ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          removeClippedSubviews
          data={reviews}
          renderItem={({ item }): JSX.Element => (
            <ReviewCardComponent
              item={item}
              userId={userId}
              houseId={houseId}
            />
          )}
          keyExtractor={(item): string => item.id.toString()}
          windowSize={3}
        />
      ) : (
        <View />
      )}
    </View>
  );
}

export default React.memo(withNavigation(ReviewComponent));
