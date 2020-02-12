import React from 'react';
import { View, ScrollView } from 'react-native';
import CardComponent from '../CardComponent';

function Apartment(): JSX.Element {
  // fake data
  const fakedata = [
    {
      id: 11,
      plan: '30',
      type: 'oneroom',
      year: '5',
      access: '5',
      status: false,
      display: true,
      startTime: 0,
      endTime: 365,
      location: ['1', '2'],
      adminDistrict: '강남구',
      title: 'this is title2',
      description: 'this is description1',
      houseRule: 'this is houseRule1',
      isActive: true,
      createdAt: '2020-02-07T16:05:43.283Z',
      updatedAt: '2020-02-07T16:05:43.283Z',
      images: [
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
        {
          id: 4,
          filePath: 'src/uploads/1581055580552.jpg',
          fileName: '1581055580552.jpg',
          createdAt: '2020-02-07T06:06:20.573Z',
          updatedAt: '2020-02-07T06:06:20.573Z',
          isActive: true,
        },
      ],
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
      images: [
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
        {
          id: 4,
          filePath: 'src/uploads/1581055580552.jpg',
          fileName: '1581055580552.jpg',
          createdAt: '2020-02-07T06:06:20.573Z',
          updatedAt: '2020-02-07T06:06:20.573Z',
          isActive: true,
        },
      ],
    },
    {
      id: 6,
      plan: '30',
      type: 'oneroom',
      year: '5',
      access: '5',
      status: false,
      display: true,
      startTime: 7,
      endTime: 365,
      location: ['1', '2'],
      adminDistrict: '강남구',
      title: 'this is title2',
      description: 'this is description1',
      houseRule: 'this is houseRule1',
      isActive: true,
      createdAt: '2020-02-07T07:06:31.392Z',
      updatedAt: '2020-02-07T07:06:31.392Z',
      images: [
        {
          id: 18,
          filePath: 'src/uploads/1581059191374.jpg',
          fileName: '1581059191374.jpg',
          createdAt: '2020-02-07T07:06:31.405Z',
          updatedAt: '2020-02-07T07:06:31.405Z',
          isActive: true,
        },
        {
          id: 17,
          filePath: 'src/uploads/1581059191373.jpg',
          fileName: '1581059191373.jpg',
          createdAt: '2020-02-07T07:06:31.401Z',
          updatedAt: '2020-02-07T07:06:31.401Z',
          isActive: true,
        },
        {
          id: 16,
          filePath: 'src/uploads/1581059191370.jpg',
          fileName: '1581059191370.jpg',
          createdAt: '2020-02-07T07:06:31.396Z',
          updatedAt: '2020-02-07T07:06:31.396Z',
          isActive: true,
        },
      ],
    },
    {
      id: 13,
      plan: '30',
      type: 'oneroom',
      year: '5',
      access: '5',
      status: false,
      display: true,
      startTime: 0,
      endTime: 365,
      location: ['1', '2'],
      adminDistrict: '강남구',
      title: 'this is title2',
      description: 'this is description1',
      houseRule: 'this is houseRule1',
      isActive: true,
      createdAt: '2020-02-07T16:08:43.339Z',
      updatedAt: '2020-02-07T16:08:43.339Z',
      images: [
        {
          id: 31,
          filePath:
            'https://billyzip.s3.ap-northeast-2.amazonaws.com/1581327194798.jpg',
          fileName: 'S__286441484.jpg',
          createdAt: '2020-02-07T16:08:43.344Z',
          updatedAt: '2020-02-07T16:08:43.344Z',
          isActive: true,
        },
        {
          id: 33,
          filePath:
            'https://billyzip.s3.ap-northeast-2.amazonaws.com/1581091723087.jpg',
          fileName: 'S__286441477.jpg',
          createdAt: '2020-02-07T16:08:43.350Z',
          updatedAt: '2020-02-07T16:08:43.350Z',
          isActive: true,
        },
        {
          id: 32,
          filePath:
            'https://billyzip.s3.ap-northeast-2.amazonaws.com/1581091723065.jpg',
          fileName: 'S__286441474.jpg',
          createdAt: '2020-02-07T16:08:43.347Z',
          updatedAt: '2020-02-07T16:08:43.347Z',
          isActive: true,
        },
      ],
    },
  ];

  // const tempArr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews
      >
        {fakedata.map((ele) => (
          <CardComponent key={ele.id} RecommendOrHouses="H" ele={ele} />
        ))}
      </ScrollView>
    </View>
  );
}

export default Apartment;
