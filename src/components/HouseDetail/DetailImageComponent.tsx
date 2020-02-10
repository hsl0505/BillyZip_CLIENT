import React from 'react';
import { View, Image, Dimensions } from 'react-native';
// import { Pagination } from 'react-native-snap-carousel';

interface Props {
  img: string;
}

function DetailImageComponent(props: Props): JSX.Element {
  const { img } = props;
  const { width } = Dimensions.get('window');
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        style={{ width, height: 250, resizeMode: 'cover' }}
        source={{ uri: img }}
      />
    </View>
  );
}

export default DetailImageComponent;
