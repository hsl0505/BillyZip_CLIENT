import React from 'react';
import { View, ScrollView } from 'react-native';
import CardComponent from '../CardComponent';

interface Props {
  apart: Ele[];
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

function Apartment(props: Props): JSX.Element {
  const { apart } = props;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews
      >
        {apart.map((ele) => (
          <CardComponent key={ele.id} RecommendOrHouses="H" ele={ele} />
        ))}
      </ScrollView>
    </View>
  );
}

export default Apartment;
