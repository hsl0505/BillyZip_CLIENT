import React from 'react';
import { ScrollView, View } from 'react-native';
import CardComponent from '../MainScreen/CardComponent';

interface Props {
  rank: undefined | object[];
}

function RecommendEntry(props: Props): JSX.Element {
  const { rank } = props;
  console.log('추천매물', rank);
  // fake data
  const fakedata = [
    {
      id: 1,
      plan: '30',
      type: 'oneroom',
      year: '5',
      access: '5',
      status: false,
      display: true,
      startTime: null,
      endTime: null,
      location: ['1', '2'],
      adminDistrict: '강남구',
      title: 'this is title2',
      description: 'this is description1',
      houseRule: 'this is houseRule1',
      isActive: true,
      createdAt: '2020-02-07T06:05:58.463Z',
      updatedAt: '2020-02-07T06:05:58.463Z',
      reviews: [],
      images: [
        {
          id: 1,
          filePath:
            'https://billyzip.s3.ap-northeast-2.amazonaws.com/1581327194798.jpg',
          fileName: '1581055558441.jpg',
          createdAt: '2020-02-07T06:05:58.471Z',
          updatedAt: '2020-02-07T06:05:58.471Z',
          isActive: true,
        },
        {
          id: 2,
          filePath: 'src/uploads/1581055558445.jpg',
          fileName: '1581055558445.jpg',
          createdAt: '2020-02-07T06:05:58.477Z',
          updatedAt: '2020-02-07T06:05:58.477Z',
          isActive: true,
        },
        {
          id: 3,
          filePath: 'src/uploads/1581055558446.jpg',
          fileName: '1581055558446.jpg',
          createdAt: '2020-02-07T06:05:58.481Z',
          updatedAt: '2020-02-07T06:05:58.481Z',
          isActive: true,
        },
      ],
      avgRating: 5,
    },
    {
      id: 2,
      plan: '30',
      type: 'oneroom',
      year: '5',
      access: '5',
      status: false,
      display: true,
      startTime: null,
      endTime: null,
      location: ['1', '2'],
      adminDistrict: '강남구',
      title: 'this is title2',
      description: 'this is description1',
      houseRule: 'this is houseRule1',
      isActive: true,
      createdAt: '2020-02-07T06:06:20.568Z',
      updatedAt: '2020-02-07T06:06:20.568Z',
      reviews: [],
      images: [
        {
          id: 4,
          filePath: 'src/uploads/1581055580552.jpg',
          fileName: '1581055580552.jpg',
          createdAt: '2020-02-07T06:06:20.573Z',
          updatedAt: '2020-02-07T06:06:20.573Z',
          isActive: true,
        },
        {
          id: 5,
          filePath: 'src/uploads/1581055580555.jpg',
          fileName: '1581055580555.jpg',
          createdAt: '2020-02-07T06:06:20.577Z',
          updatedAt: '2020-02-07T06:06:20.577Z',
          isActive: true,
        },
        {
          id: 6,
          filePath: 'src/uploads/1581055580557.jpg',
          fileName: '1581055580557.jpg',
          createdAt: '2020-02-07T06:06:20.579Z',
          updatedAt: '2020-02-07T06:06:20.579Z',
          isActive: true,
        },
      ],
      avgRating: 4.5,
    },
    {
      id: 3,
      plan: '30',
      type: 'oneroom',
      year: '5',
      access: '5',
      status: false,
      display: true,
      startTime: null,
      endTime: null,
      location: ['1', '2'],
      adminDistrict: '강남구',
      title: 'this is title2',
      description: 'this is description1',
      houseRule: 'this is houseRule1',
      isActive: true,
      createdAt: '2020-02-07T06:06:21.830Z',
      updatedAt: '2020-02-07T06:06:21.830Z',
      reviews: [],
      images: [
        {
          id: 7,
          filePath: 'src/uploads/1581055581818.jpg',
          fileName: '1581055581818.jpg',
          createdAt: '2020-02-07T06:06:21.834Z',
          updatedAt: '2020-02-07T06:06:21.834Z',
          isActive: true,
        },
        {
          id: 8,
          filePath: 'src/uploads/1581055581819.jpg',
          fileName: '1581055581819.jpg',
          createdAt: '2020-02-07T06:06:21.837Z',
          updatedAt: '2020-02-07T06:06:21.837Z',
          isActive: true,
        },
        {
          id: 9,
          filePath: 'src/uploads/1581055581820.jpg',
          fileName: '1581055581820.jpg',
          createdAt: '2020-02-07T06:06:21.841Z',
          updatedAt: '2020-02-07T06:06:21.841Z',
          isActive: true,
        },
      ],
      avgRating: 4,
    },
    {
      id: 4,
      plan: '30',
      type: 'oneroom',
      year: '5',
      access: '5',
      status: false,
      display: true,
      startTime: null,
      endTime: null,
      location: ['1', '2'],
      adminDistrict: '강남구',
      title: 'this is title2',
      description: 'this is description1',
      houseRule: 'this is houseRule1',
      isActive: true,
      createdAt: '2020-02-07T06:36:54.604Z',
      updatedAt: '2020-02-07T06:36:54.604Z',
      reviews: [],
      images: [
        {
          id: 10,
          filePath: 'src/uploads/1581057414579.jpg',
          fileName: '1581057414579.jpg',
          createdAt: '2020-02-07T06:36:54.609Z',
          updatedAt: '2020-02-07T06:36:54.609Z',
          isActive: true,
        },
        {
          id: 11,
          filePath: 'src/uploads/1581057414582.jpg',
          fileName: '1581057414582.jpg',
          createdAt: '2020-02-07T06:36:54.614Z',
          updatedAt: '2020-02-07T06:36:54.614Z',
          isActive: true,
        },
        {
          id: 12,
          filePath: 'src/uploads/1581057414583.jpg',
          fileName: '1581057414583.jpg',
          createdAt: '2020-02-07T06:36:54.618Z',
          updatedAt: '2020-02-07T06:36:54.618Z',
          isActive: true,
        },
      ],
      avgRating: 3.2,
    },
  ];
  // const tempArr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  return (
    <View style={{ flex: 1 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {fakedata.map((ele) => (
          <CardComponent key={ele.id} RecommendOrHouses="R" ele={ele} />
        ))}
      </ScrollView>
    </View>
  );
}

export default RecommendEntry;
