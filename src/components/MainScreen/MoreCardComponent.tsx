import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { Card, Rating } from 'react-native-elements';

interface Props {
  item: {
    title: string;
    description: string;
    images: Images[];
    avgRating: number;
  };
}

interface Images {
  filePath: string | undefined;
}

function MoreCardComponent(props: Props): JSX.Element {
  const { item } = props;
  const { title, description, images, avgRating } = item;
  const { filePath } = images[0];

  //   console.log('순차 렌더링', id);
  return (
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
  );
}

export default React.memo(MoreCardComponent);
