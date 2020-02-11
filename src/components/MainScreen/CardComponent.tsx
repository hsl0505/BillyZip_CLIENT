import React from 'react';
import { Card, Rating } from 'react-native-elements';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

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
}

function CardComponent(props: Props): JSX.Element {
  const { RecommendOrHouses, ele } = props;
  const { id, type, title, images, avgRating } = ele;
  const { filePath } = images[0];
  return (
    <TouchableOpacity
      onPress={(): void => {
        props.navigation.navigate('HouseDetail', { houseId: id });
      }}
    >
      <Card
        image={{
          uri: filePath,
        }}
        containerStyle={{
          height: RecommendOrHouses === 'R' ? '90%' : 150,
          width: RecommendOrHouses === 'R' ? 300 : 200,
          marginBottom: 15,
        }}
        imageStyle={{
          height: RecommendOrHouses === 'R' ? 200 : 100,
          width: RecommendOrHouses === 'R' ? 300 : 200,
        }}
        imageProps={{
          resizeMode: 'cover',
          PlaceholderContent: <ActivityIndicator />,
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text>{title}</Text>
            <Text>{type}</Text>
          </View>
          {RecommendOrHouses === 'R' ? (
            <View>
              <Text style={{ alignSelf: 'center' }}>Rating</Text>
              <Rating
                readonly
                startingValue={avgRating}
                imageSize={20}
                fractions={2}
              />
              <Text style={{ alignSelf: 'center' }}>{avgRating}</Text>
            </View>
          ) : (
            <View />
          )}
        </View>
      </Card>
    </TouchableOpacity>
  );
}

export default withNavigation(CardComponent);
