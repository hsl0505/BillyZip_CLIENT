import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { FontAwesome } from '@expo/vector-icons';
import DetailImageComponent from './DetailImageComponent';
import axiosInstance from '../../util/axiosInstance';

interface Props {
  images: Img[];
  houseId: number;
  favsNow: boolean;
}

interface Img {
  filePath: string;
}

function HouseDetailComponent(props: Props): JSX.Element {
  const { width } = Dimensions.get('window');
  const { images, houseId, favsNow } = props;
  const imgLength = images.length;

  const [activeSlide, setActiveSlide] = useState(0);
  const [isFavsNow, setFavsNow] = useState(favsNow);

  return (
    <View>
      <Carousel
        data={images}
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
      <FontAwesome
        name={isFavsNow ? 'heart' : 'heart-o'}
        size={34}
        style={{ position: 'absolute', right: width * 0.07, top: 40 }}
        color={isFavsNow ? 'red' : '#fff'}
        onPress={(): void => {
          if (isFavsNow) {
            setFavsNow(false);
            axiosInstance
              .delete(`favs/${houseId}`)
              .then((res) => console.log(res.status))
              .catch((err) => console.log(err));
          } else {
            setFavsNow(true);
            axiosInstance
              .post('favs', {
                houseId,
              })
              .then((res) => console.log(res.status))
              .catch((err) => console.log(err));
          }
        }}
      />
      <Pagination
        activeDotIndex={activeSlide}
        dotsLength={imgLength}
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
