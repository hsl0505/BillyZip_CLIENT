import React from 'react';
import { View, FlatList } from 'react-native';
import MoreCardComponent from '../MainScreen/MoreCardComponent';

interface Props {
  data: Item[];
  isFav: string;
}

interface Item {
  id: number;
  title: string;
  description: string;
  images: Images[];
  avgRating: number;
  adminDistrict: string;
}

interface Images {
  filePath: string | undefined;
}

function NormalResult(props: Props): JSX.Element {
  const { data } = props;
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }): JSX.Element => (
          <MoreCardComponent item={item} isFav="a" />
        )}
        keyExtractor={(item): string => item.id.toString()}
        windowSize={3}
      />
    </View>
  );
}

export default NormalResult;
