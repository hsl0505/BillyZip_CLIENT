import React from 'react';
import { View, FlatList } from 'react-native';

import MoreCardComponent from '../MainScreen/MoreCardComponent';

interface Props {
  houses: object[];
}

function MoreListEntry(props: Props): JSX.Element {
  const { houses } = props;
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
            'https://billyzip.s3.ap-northeast-2.amazonaws.com/1581179987741.jpg',
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
      avgRating: 0,
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
      avgRating: 0,
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
      avgRating: 0,
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
      avgRating: 0,
    },
    // { id: 5 },
    // { id: 6 },
    // { id: 7 },
    // { id: 8 },
    // { id: 9 },
    // { id: 10 },
    // { id: 11 },
    // { id: 12 },
    // { id: 13 },
    // { id: 14 },
    // { id: 15 },
    // { id: 16 },
    // { id: 17 },
    // { id: 18 },
  ];
  return (
    <View>
      <FlatList
        data={fakedata}
        renderItem={({ item }): JSX.Element => (
          <MoreCardComponent item={item} />
        )}
        keyExtractor={(item): string => item.id.toString()}
        windowSize={3}
      />
    </View>
  );
}

export default MoreListEntry;
