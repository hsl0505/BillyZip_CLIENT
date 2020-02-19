import React, { useState, useEffect } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import RecommendEntry from './RecommendEntry';

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

function Recommend(props: Props): JSX.Element {
  const { rank } = props;
  const [userName, setUserName] = useState('');

  async function getUserName(): Promise<void> {
    try {
      const name = await AsyncStorage.getItem('userName');
      if (name) {
        setUserName(name);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUserName();
  });

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            marginTop: 35,
            marginLeft: 15,
            fontSize: 26,
            fontWeight: 'bold',
            fontStyle: 'italic',
          }}
        >
          {userName} 님,
        </Text>
        <Text
          style={{
            marginTop: 4,
            marginLeft: 15,
            fontSize: 26,
            fontWeight: 'bold',
          }}
        >
          무슨 집을 찾고 계시나요?
        </Text>
        <Text style={{ fontSize: 24, marginTop: 35, marginLeft: 15 }}>
          BillyZip이 추천하는 House
        </Text>
      </View>
      <View style={{ flex: 1, marginTop: 10 }}>
        <RecommendEntry rank={rank} />
      </View>
    </View>
  );
}

export default Recommend;
