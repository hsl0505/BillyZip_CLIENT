import React from 'react';
import { View, Text } from 'react-native';
// import { Button } from 'react-native-elements';
import {
  withNavigation
} from 'react-navigation';

function ForumEntry(props: any): JSX.Element {
    const { forum } = props;
    return (
        <View>
            <Text key={forum.id}>{`${forum.hostName} 호스트의 포럼입니다.`}</Text>
        </View>
    );
  }
  
  export default withNavigation(ForumEntry);
  