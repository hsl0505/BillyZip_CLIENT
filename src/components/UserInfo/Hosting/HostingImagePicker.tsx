import React, { useState, useEffect } from 'react';
import { View, Dimensions, Alert } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Button, Overlay } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import cameraHelper from '../../../util/cameraHelper';
import HostingImageComponent from './HostingImageComponent';
import HostingSkeleton from './HostingSkeleton';

interface Items {
  uri?: string;
}

function HostingImagePicker(): JSX.Element {
  const { width } = Dimensions.get('window');
  const [isVisible, setVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [hasCamera, setCamera] = useState();
  const [hasCameraRoll, setCameraRoll] = useState();
  const [images, setImage] = useState<Items[]>([{}]);

  useEffect(() => {
    if (hasCameraRoll !== 'granted') {
      cameraHelper.getRollPermission(setCameraRoll);
      cameraHelper.getCameraPermission(setCamera);
    }
  }, [hasCameraRoll, hasCamera]);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {images[0].uri ? (
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={(): void => setVisible(true)}>
            <Carousel
              data={images}
              renderItem={({ item }): JSX.Element => (
                <HostingImageComponent img={item.uri} />
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
              dotsLength={images.length}
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
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={(): void => setVisible(true)}>
          <HostingSkeleton />
        </TouchableOpacity>
      )}

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: 15,
          justifyContent: 'flex-end',
        }}
      >
        <Button
          title="이미지 1개 삭제"
          onPress={(): void => {
            if (!images[0].uri) {
              Alert.alert('삭제할 이미지가 없습니다.');
            } else if (images.length === 1) {
              setImage([{}]);
            } else {
              const deleteImages = images.slice(0, images.length - 1);
              setImage(deleteImages);
            }
          }}
          type="outline"
          buttonStyle={{ marginRight: 15 }}
        />
        <Button
          title="이미지 전체 삭제"
          onPress={(): void => {
            if (!images[0].uri) {
              Alert.alert('삭제할 이미지가 없습니다.');
            } else {
              setImage([{}]);
            }
          }}
          type="outline"
          buttonStyle={{ marginRight: 15 }}
        />
      </View>

      <Overlay
        isVisible={isVisible}
        onBackdropPress={(): void => setVisible(false)}
        height={80}
        width={250}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <MaterialIcons
            name="add-a-photo"
            onPress={(): void => {
              if (hasCamera !== 'granted') {
                Alert.alert('카메라 접근 권한을 설정해주세요');
              } else {
                cameraHelper
                  .getPhotoByCamera(setImage, images)
                  .then(() => setVisible(false));
              }
            }}
            size={30}
          />
          <MaterialIcons
            name="photo-library"
            onPress={(): void => {
              if (hasCameraRoll !== 'granted') {
                Alert.alert('사진/미디어 접근 권한을 설정해주세요');
              } else {
                cameraHelper
                  .getPhoto(setImage, images)
                  .then(() => setVisible(false));
              }
            }}
            size={30}
          />
        </View>
      </Overlay>
    </View>
  );
}

export default HostingImagePicker;
