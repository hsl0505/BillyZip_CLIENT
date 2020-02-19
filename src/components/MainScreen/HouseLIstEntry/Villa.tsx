import React from 'react';
import { View, ScrollView } from 'react-native';
import CardComponent from '../CardComponent';

interface Props {
  villa: Ele[];
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
}

function Villa(props: Props): JSX.Element {
  const { villa } = props;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews
      >
        {villa.map((ele) => (
          <CardComponent key={ele.id} RecommendOrHouses="H" ele={ele} />
        ))}
      </ScrollView>
    </View>
  );
}

export default Villa;
