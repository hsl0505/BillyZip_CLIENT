import React from 'react';
import { ScrollView, View } from 'react-native';
import CardComponent from '../MainScreen/CardComponent';

interface Props {
  rank: Ele[];
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

function RecommendEntry(props: Props): JSX.Element {
  const { rank } = props;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews
      >
        {rank.map((ele) => (
          <CardComponent key={ele.id} RecommendOrHouses="R" ele={ele} />
        ))}
      </ScrollView>
    </View>
  );
}

export default RecommendEntry;
