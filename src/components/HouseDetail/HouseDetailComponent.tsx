import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import DetailImageComponent from './DetailImageComponent';

function HouseDetailComponent(): JSX.Element {
  const { width } = Dimensions.get('window');
  const [activeSlide, setActiveSlide] = useState(0);
  const fakeimages = [
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
      filePath:
        'https://billyzip.s3.ap-northeast-2.amazonaws.com/1581179987741.jpg',
      fileName: '1581055558445.jpg',
      createdAt: '2020-02-07T06:05:58.477Z',
      updatedAt: '2020-02-07T06:05:58.477Z',
      isActive: true,
    },
    {
      id: 3,
      filePath:
        'https://billyzip.s3.ap-northeast-2.amazonaws.com/1581179987741.jpg',
      fileName: '1581055558446.jpg',
      createdAt: '2020-02-07T06:05:58.481Z',
      updatedAt: '2020-02-07T06:05:58.481Z',
      isActive: true,
    },
    {
      id: 3,
      filePath:
        'https://billyzip.s3.ap-northeast-2.amazonaws.com/1581179987741.jpg',
      fileName: '1581055558446.jpg',
      createdAt: '2020-02-07T06:05:58.481Z',
      updatedAt: '2020-02-07T06:05:58.481Z',
      isActive: true,
    },
    {
      id: 3,
      filePath:
        'https://billyzip.s3.ap-northeast-2.amazonaws.com/1581179987741.jpg',
      fileName: '1581055558446.jpg',
      createdAt: '2020-02-07T06:05:58.481Z',
      updatedAt: '2020-02-07T06:05:58.481Z',
      isActive: true,
    },
  ];
  const tempLength = fakeimages.length;
  return (
    <View>
      <Carousel
        data={fakeimages}
        renderItem={({ item }): JSX.Element => (
          <DetailImageComponent img={item.filePath} />
        )}
        itemWidth={width}
        sliderWidth={width}
        onSnapToItem={(index): void => setActiveSlide(index)}
        removeClippedSubviews
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        activeSlideOffset={10}
      />
      <Pagination
        activeDotIndex={activeSlide}
        dotsLength={tempLength}
        dotStyle={{
          width: 30,
          height: 6,
          backgroundColor: '#fff',
        }}
        inactiveDotScale={0.8}
        inactiveDotStyle={{ backgroundColor: '#848484' }}
        containerStyle={{
          flex: 1,
          height: 70,
          marginTop: -65,
          marginBottom: -5,
          alignSelf: 'center',
        }}
      />
    </View>
  );
}

export default HouseDetailComponent;
