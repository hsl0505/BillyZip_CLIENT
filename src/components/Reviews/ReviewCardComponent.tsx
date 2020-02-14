import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface Props {
  item: {
    id: number;
    comment: string;
    rating: number;
    createdAt: string;
    user: {
      name: string;
      gender: string;
    };
  };
}

function ReviewCardComponent(props: Props): JSX.Element {
  const { item } = props;
  const { comment, rating, createdAt, user } = item;
  const { name, gender } = user;
  console.log(comment, rating, createdAt, name, gender);
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 20,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#D8D8D8',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
          {name} 님의 리뷰
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 20,
          }}
        >
          <AntDesign name="star" size={17} />
          <Text style={{ fontWeight: 'bold', fontSize: 17, marginLeft: 3 }}>
            {rating}
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 5 }}>
        <Text style={{ color: '#A4A4A4' }}>{`${createdAt.slice(
          0,
          4,
        )}년 ${createdAt.slice(5, 7)}월 ${createdAt.slice(8, 10)}일`}</Text>
      </View>
      <View style={{ marginTop: 30, marginBottom: 50 }}>
        <Text style={{ fontSize: 18 }}>{comment}</Text>
      </View>
    </View>
  );
}

export default ReviewCardComponent;