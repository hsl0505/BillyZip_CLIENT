import React from 'react';
import { View, FlatList } from 'react-native';

import MoreCardComponent from '../MainScreen/MoreCardComponent';

interface Props {
  houses?: Item[];
  isFav: string;
  favHouses?: Fav[];
}

interface Item {
  id: number;
  title: string;
  description: string;
  images: Images[];
  avgRating: number;
  adminDistrict: string;
}

interface Fav {
  house: {
    id: number;
    title: string;
    description: string;
    images: Images[];
    avgRating: number;
    adminDistrict: string;
  };
}

interface Images {
  filePath: string | undefined;
  fileName: string | undefined;
}

function MoreListEntry(props: Props): JSX.Element {
  const { houses, isFav, favHouses } = props;

  return (
    <View style={{ marginBottom: 100 }}>
      {houses ? (
        <FlatList
          removeClippedSubviews
          data={houses}
          renderItem={({ item }): JSX.Element => (
            <MoreCardComponent item={item} isFav={isFav} />
          )}
          keyExtractor={(item): string => item.id.toString()}
          windowSize={3}
        />
      ) : (
        <FlatList
          removeClippedSubviews
          data={favHouses}
          renderItem={({ item }): JSX.Element => (
            <MoreCardComponent item={item.house} isFav={isFav} />
          )}
          keyExtractor={(item): string => item.house.id.toString()}
          windowSize={3}
        />
      )}
    </View>
  );
}

export default MoreListEntry;
