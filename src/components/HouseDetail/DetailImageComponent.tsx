import React from 'react';
import { View, Dimensions, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';

interface Props {
  img: string;
}

function DetailImageComponent(props: Props): JSX.Element {
  const { img } = props;
  const { width } = Dimensions.get('window');
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        style={{ width, height: 275, resizeMode: 'cover' }}
        source={{ uri: img }}
        PlaceholderContent={<ActivityIndicator />}
      />
    </View>
  );
}

export default DetailImageComponent;
