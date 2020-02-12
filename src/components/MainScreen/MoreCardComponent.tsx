import React from 'react';
import { Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Card, Rating } from 'react-native-elements';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

interface Props {
  item: {
    id: number;
    title: string;
    description: string;
    images: Images[];
    avgRating: number;
  };
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
  isFav: string;
}

interface Images {
  filePath: string | undefined;
}

function MoreCardComponent(props: Props): JSX.Element {
  const { item, isFav } = props;
  const { id, title, description, images, avgRating } = item;
  const { filePath } = images[0];

  return (
    <TouchableOpacity
      onPress={(): void => {
        props.navigation.navigate(
          isFav === 'f' ? 'FavorHouseDetail' : 'HouseDetail',
          { houseId: id, isFav },
        );
      }}
    >
      <Card
        image={{ uri: filePath }}
        containerStyle={{ marginBottom: 15, height: 300 }}
        imageStyle={{ height: 210 }}
        imageProps={{
          resizeMode: 'cover',
          PlaceholderContent: <ActivityIndicator />,
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text>{title}</Text>
            <Text>{description}</Text>
          </View>
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
        </View>
      </Card>
    </TouchableOpacity>
  );
}

export default React.memo(withNavigation(MoreCardComponent));
