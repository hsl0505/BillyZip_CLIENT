import React from 'react';
import { View, FlatList } from 'react-native';

import MoreCardComponent from '../MainScreen/MoreCardComponent';

interface Props {
  houses: Item[];
  isFav: string;
}

interface Item {
  id: number;
  title: string;
  description: string;
  images: Images[];
  avgRating: number;
}

interface Images {
  filePath: string | undefined;
}

function MoreListEntry(props: Props): JSX.Element {
  const { houses, isFav } = props;
  return (
    <View>
      <FlatList
        removeClippedSubviews
        data={houses}
        renderItem={({ item }): JSX.Element => (
          <MoreCardComponent item={item} isFav={isFav} />
        )}
        keyExtractor={(item): string => item.id.toString()}
        windowSize={3}
      />
    </View>
  );
}

export default MoreListEntry;
