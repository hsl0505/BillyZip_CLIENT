import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

function DetachedHouse(): JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Card
          image={require('../../../../card.jpg')}
          containerStyle={{
            height: 150,
            width: 200,
            marginBottom: 15,
            marginRight: 0,
          }}
          imageStyle={{ height: 100, width: 200 }}
          imageProps={{ resizeMode: 'cover' }}
        >
          <Text>test</Text>
        </Card>
        <Card
          image={require('../../../../card.jpg')}
          containerStyle={{ height: 150, width: 200 }}
          imageStyle={{ height: 100, width: 200 }}
        >
          <Text>test</Text>
        </Card>
        <Card
          image={require('../../../../card.jpg')}
          containerStyle={{ height: 150, width: 200 }}
          imageStyle={{ height: 100, width: 200 }}
        >
          <Text>test</Text>
        </Card>
        <Card
          image={require('../../../../card.jpg')}
          containerStyle={{ height: 150, width: 200 }}
          imageStyle={{ height: 100, width: 200 }}
        >
          <Text>test</Text>
        </Card>
      </ScrollView>
    </View>
  );
}

export default DetachedHouse;
