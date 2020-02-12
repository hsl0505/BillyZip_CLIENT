import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ReviewCardComponent from './ReviewCardComponent';

function ReviewComponent(): JSX.Element {
  // 네비게이션 프롭스로 리뷰스, 평균레이팅 받아와야됨
  const fakeavg = 4.4;
  const fakereviews = [
    {
      id: 1,
      comment:
        '댓글 잘 달리나요? 잘 달리는거 같은데 이건 테스트입니다 안녕하세요 반갑습니다 아 힘들다',
      rating: 5,
      createdAt: '2020-02-11T21:05:18.608Z',
      updatedAt: '2020-02-11T21:05:18.608Z',
      isActive: true,
      user: {
        id: 1,
        email: '1',
        password:
          '$2b$10$BWxxf8DXFtjAglV.aW9bfe9hMVzteJwWkX/JLbctj72IKSbc4Grs2',
        name: 'jo',
        mobile: '010-1111-2222',
        gender: 'male',
        birth: '2020-12-31',
        currentPlan: null,
        expiry: 3,
        livingHouse: null,
        isActive: true,
        createdAt: '2020-02-11T05:55:37.754Z',
        updatedAt: '2020-02-11T05:55:37.754Z',
      },
    },
    {
      id: 2,
      comment:
        '살기 좋은거 같기도하고 아닌거 같기도하고 살기 좋은거 같기도하고 아닌거 같기도하고 살기 좋은거 같기도하고 아닌거 같기도하고 살기 좋은거 같기도하고 아닌거 같기도하고',
      rating: 3,
      createdAt: '2020-02-11T21:05:31.924Z',
      updatedAt: '2020-02-11T21:05:31.924Z',
      isActive: true,
      user: {
        id: 1,
        email: '1',
        password:
          '$2b$10$BWxxf8DXFtjAglV.aW9bfe9hMVzteJwWkX/JLbctj72IKSbc4Grs2',
        name: 'jo',
        mobile: '010-1111-2222',
        gender: 'male',
        birth: '2020-12-31',
        currentPlan: null,
        expiry: 3,
        livingHouse: null,
        isActive: true,
        createdAt: '2020-02-11T05:55:37.754Z',
        updatedAt: '2020-02-11T05:55:37.754Z',
      },
    },
    {
      id: 3,
      comment: '1번 매물 코멘트 3',
      rating: 1,
      createdAt: '2020-02-11T21:05:35.834Z',
      updatedAt: '2020-02-11T21:05:35.834Z',
      isActive: true,
      user: {
        id: 1,
        email: '1',
        password:
          '$2b$10$BWxxf8DXFtjAglV.aW9bfe9hMVzteJwWkX/JLbctj72IKSbc4Grs2',
        name: 'jo',
        mobile: '010-1111-2222',
        gender: 'male',
        birth: '2020-12-31',
        currentPlan: null,
        expiry: 3,
        livingHouse: null,
        isActive: true,
        createdAt: '2020-02-11T05:55:37.754Z',
        updatedAt: '2020-02-11T05:55:37.754Z',
      },
    },
    {
      id: 4,
      comment: '1번 매물 코멘트 4',
      rating: 4,
      createdAt: '2020-02-11T21:05:40.233Z',
      updatedAt: '2020-02-11T21:05:40.233Z',
      isActive: true,
      user: {
        id: 1,
        email: '1',
        password:
          '$2b$10$BWxxf8DXFtjAglV.aW9bfe9hMVzteJwWkX/JLbctj72IKSbc4Grs2',
        name: 'jo',
        mobile: '010-1111-2222',
        gender: 'male',
        birth: '2020-12-31',
        currentPlan: null,
        expiry: 3,
        livingHouse: null,
        isActive: true,
        createdAt: '2020-02-11T05:55:37.754Z',
        updatedAt: '2020-02-11T05:55:37.754Z',
      },
    },
    {
      id: 5,
      comment: '1번 매물 코멘트 5',
      rating: 2,
      createdAt: '2020-02-11T21:05:44.292Z',
      updatedAt: '2020-02-11T21:05:44.292Z',
      isActive: true,
      user: {
        id: 1,
        email: '1',
        password:
          '$2b$10$BWxxf8DXFtjAglV.aW9bfe9hMVzteJwWkX/JLbctj72IKSbc4Grs2',
        name: 'jo',
        mobile: '010-1111-2222',
        gender: 'male',
        birth: '2020-12-31',
        currentPlan: null,
        expiry: 3,
        livingHouse: null,
        isActive: true,
        createdAt: '2020-02-11T05:55:37.754Z',
        updatedAt: '2020-02-11T05:55:37.754Z',
      },
    },
  ];
  return (
    <View style={{ flex: 1 }}>
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
          {fakeavg}
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 25 }}>
          총 {fakereviews.length}개의 리뷰
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
        data={fakereviews}
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
