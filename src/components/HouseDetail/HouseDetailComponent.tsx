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
        'https://billyzip.s3.ap-northeast-2.amazonaws.com/1581327252989.jpg',
      fileName: 'unnamed.jpg',
      createdAt: '2020-02-10T00:34:13.348Z',
      updatedAt: '2020-02-10T00:34:13.348Z',
      isActive: true,
    },
    {
      id: 2,
      filePath:
        'https://billyzip.s3.ap-northeast-2.amazonaws.com/1581327252989.jpg',
      fileName: 'maxresdefault.jpg',
      createdAt: '2020-02-10T00:34:13.396Z',
      updatedAt: '2020-02-10T00:34:13.396Z',
      isActive: true,
    },
    {
      id: 3,
      filePath:
        'https://billyzip.s3.ap-northeast-2.amazonaws.com/1581327252993.jpg',
      fileName: '2c7cb48c0ea2c1e83d12159f6bd811c6.jpg',
      createdAt: '2020-02-10T00:34:13.450Z',
      updatedAt: '2020-02-10T00:34:13.450Z',
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