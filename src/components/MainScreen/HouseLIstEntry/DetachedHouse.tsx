import React from 'react';
import { View, ScrollView } from 'react-native';
import CardComponent from '../CardComponent';

interface Props {
  dandok: Ele[];
}

interface Ele {
  id: number;
  type: string;
  title: string;
  description: string;
  images: Images[];
  avgRating?: number;
}

interface Images {
  filePath: string | undefined;
  fileName: string | undefined;
}

function DetachedHouse(props: Props): JSX.Element {
  const { dandok } = props;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews
      >
        {dandok.map((ele) => (
          <CardComponent key={ele.id} RecommendOrHouses="H" ele={ele} />
        ))}
      </ScrollView>
    </View>
  );
}

export default DetachedHouse;
