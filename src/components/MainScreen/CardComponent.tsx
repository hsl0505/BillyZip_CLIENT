import React from 'react';
import { Card } from 'react-native-elements';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

import { AntDesign } from '@expo/vector-icons';

interface Props {
  RecommendOrHouses: string;
  ele: {
    id: number;
    type: string;
    title: string;
    description: string;
    images: Images[];
    avgRating?: number;
  };
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

interface Images {
  filePath: string | undefined;
  fileName: string | undefined;
}

function CardComponent(props: Props): JSX.Element {
  const { RecommendOrHouses, ele } = props;
  const { id, type, title, images, avgRating, description } = ele;
  let filePath;
  images.forEach((img) => {
    if (img.fileName === 'mainImg.jpg') {
      filePath = img.filePath;
    }
  });

  if (!filePath) {
    filePath = images[0].filePath;
  }

  return (
    <TouchableOpacity
      onPress={(): void => {
        props.navigation.navigate('HouseDetail', { houseId: id });
      }}
      activeOpacity={0.9}
    >
      <Card
        image={{
          uri: filePath,
        }}
        containerStyle={{
          height: RecommendOrHouses === 'R' ? 300 : 190,
          width: RecommendOrHouses === 'R' ? 300 : 200,
          marginBottom: 15,
          borderRadius: RecommendOrHouses === 'R' ? 30 : 20,
        }}
        imageStyle={{
          height: RecommendOrHouses === 'R' ? 200 : 120,
          width: RecommendOrHouses === 'R' ? 300 : 200,
        }}
        imageProps={{
          resizeMode: 'cover',
          PlaceholderContent: <ActivityIndicator />,
          placeholderStyle: {
            backgroundColor: '#fff',
            borderTopLeftRadius: RecommendOrHouses === 'R' ? 30 : 20,
            borderTopRightRadius: RecommendOrHouses === 'R' ? 30 : 20,
            width: RecommendOrHouses === 'R' ? 298 : 198,
          },
          borderTopLeftRadius: RecommendOrHouses === 'R' ? 30 : 20,
          borderTopRightRadius: RecommendOrHouses === 'R' ? 30 : 20,
        }}
      >
        <View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View
              style={{
                width: RecommendOrHouses === 'R' ? 205 : 180,
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: RecommendOrHouses === 'R' ? 17 : 14,
                }}
                numberOfLines={RecommendOrHouses === 'R' ? 2 : 1}
                ellipsizeMode="tail"
              >
                {title}
              </Text>
            </View>

            {RecommendOrHouses === 'R' ? (
              <View style={{ marginRight: 5 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <AntDesign name="star" size={20} color="purple" />
                  <Text
                    style={{ fontSize: 20, marginLeft: 5, fontWeight: 'bold' }}
                  >
                    {avgRating ? avgRating.toFixed(2) : avgRating}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      alignSelf: 'flex-end',
                      fontSize: 15,
                      marginTop: 5,
                    }}
                  >
                    {type.toUpperCase()}
                  </Text>
                </View>
              </View>
            ) : (
              <View />
            )}
          </View>

          <View
            style={{
              width: RecommendOrHouses === 'R' ? 205 : 180,
              marginTop: RecommendOrHouses === 'R' ? undefined : 10,
            }}
          >
            <Text
              style={{ fontStyle: 'italic', color: '#A4A4A4' }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {`" ${description} "`}
            </Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

export default withNavigation(CardComponent);
