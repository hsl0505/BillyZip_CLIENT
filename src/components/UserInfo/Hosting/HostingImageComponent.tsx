import React from 'react';
import { View, Dimensions, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';

interface Props {
  img?: string;
  mainimg: string;
}

function HostingImageComponent(props: Props): JSX.Element {
  const { img, mainimg } = props;
  const { width } = Dimensions.get('window');
  return (
    <View
      style={{
        alignItems: 'center',
        borderWidth: 10,
        borderColor: mainimg === 'y' ? 'purple' : '#fff',
      }}
    >
      <Image
        style={{ width, height: 260, resizeMode: 'cover' }}
        source={{ uri: img }}
        PlaceholderContent={<ActivityIndicator />}
      />
    </View>
  );
}

export default HostingImageComponent;
