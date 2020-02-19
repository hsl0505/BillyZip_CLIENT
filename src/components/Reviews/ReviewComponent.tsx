import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ReviewCardComponent from './ReviewCardComponent';

interface Props {
  avgRating: number;
  reviews: Rv[];
}

interface Rv {
  id: number;
  comment: string;
  rating: number;
  createdAt: string;
  user: {
    name: string;
    gender: string;
  };
}

function ReviewComponent(props: Props): JSX.Element {
  // 네비게이션 프롭스로 리뷰스, 평균레이팅 받아와야됨
  const { avgRating, reviews } = props;
  const reviewLength = reviews.length;

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
        }}
      >
        <AntDesign name="star" size={20} color="green" />
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 5 }}>
          {avgRating}
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 25 }}>
          총 {reviewLength}개의 리뷰
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
        data={reviews}
        renderItem={({ item }): JSX.Element => (
          <ReviewCardComponent item={item} />
        )}
        keyExtractor={(item): string => item.id.toString()}
        windowSize={3}
      />
    </View>
  );
}

export default React.memo(ReviewComponent);
