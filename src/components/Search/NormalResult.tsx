import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
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
  fileName: string | undefined;
}

function NormalResult(props: Props): JSX.Element {
  const { data } = props;
  return (
    <View>
      <Text
        style={{
          marginTop: 40,
          marginLeft: 15,
          fontWeight: 'bold',
          fontSize: 26,
        }}
      >
        검색 결과
      </Text>
      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={({ item }): JSX.Element => (
            <MoreCardComponent item={item} isFav="a" />
          )}
          keyExtractor={(item): string => item.id.toString()}
          windowSize={3}
        />
      ) : (
        <View
          style={{
            alignItems: 'center',
            marginTop: 100,
          }}
        >
          <AntDesign name="frowno" size={80} color="purple" />
          <Text style={{ fontSize: 20, marginTop: 50 }}>
            조건에 맞는 집이 없습니다.
          </Text>
        </View>
      )}
    </View>
  );
}

export default NormalResult;
