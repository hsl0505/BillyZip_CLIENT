import React from 'react';
import { View, ScrollView } from 'react-native';
import CardComponent from '../CardComponent';

interface Props {
  officetel: Ele[];
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

function Officetel(props: Props): JSX.Element {
  const { officetel } = props;
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews
      >
        {officetel.map((ele) => (
          <CardComponent key={ele.id} RecommendOrHouses="H" ele={ele} />
        ))}
      </ScrollView>
    </View>
  );
}

export default Officetel;
