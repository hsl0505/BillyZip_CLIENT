import React from 'react';
import { Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

import { AntDesign } from '@expo/vector-icons';

interface Props {
  item: {
    id: number;
    title: string;
    description: string;
    images: Images[];
    avgRating: number;
    adminDistrict: string;
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
  const { id, title, description, images, avgRating, adminDistrict } = item;
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
        containerStyle={{ marginBottom: 15, height: 330 }}
        imageStyle={{ height: 210 }}
        imageProps={{
          resizeMode: 'cover',
          PlaceholderContent: <ActivityIndicator />,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View>
            <Text
              style={{ width: 240, fontWeight: 'bold', fontSize: 17 }}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {title}
            </Text>
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <AntDesign name="star" size={20} color="purple" />
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 5 }}>
                {avgRating ? avgRating.toFixed(2) : avgRating}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{ marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">
            {adminDistrict}
          </Text>
          <Text
            style={{ marginTop: 9, fontStyle: 'italic' }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {`" ${description} "`}
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

export default React.memo(withNavigation(MoreCardComponent));
