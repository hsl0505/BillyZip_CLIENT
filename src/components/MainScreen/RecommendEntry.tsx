import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-elements';

function RecommendEntry(): JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Card
          image={require('../../../card.jpg')}
          containerStyle={{ height: 280, width: 300, marginBottom: 15 }}
          imageStyle={{ height: 200, width: 200 }}
        >
          <Text>test</Text>
        </Card>
        <Card
          image={require('../../../card.jpg')}
          containerStyle={{ height: 280, width: 300, marginBottom: 15 }}
          imageStyle={{ height: 200, width: 200 }}
        >
          <Text>test</Text>
        </Card>
        <Card
          image={require('../../../card.jpg')}
          containerStyle={{ height: 280, width: 300, marginBottom: 15 }}
          imageStyle={{ height: 200, width: 200 }}
        >
          <Text>test</Text>
        </Card>
        <Card
          image={require('../../../card.jpg')}
          containerStyle={{ height: 280, width: 300, marginBottom: 15 }}
          imageStyle={{ height: 200, width: 200 }}
        >
          <Text>test</Text>
        </Card>
      </ScrollView>
    </View>
  );
}

export default RecommendEntry;
