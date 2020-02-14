import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function HostingSkeleton(): JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        height: 260,
        justifyContent: 'center',
        borderStyle: 'solid',
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 1,
        borderTopColor: '#D8D8D8',
        borderTopWidth: 1,
      }}
    >
      <MaterialCommunityIcons name="file-upload-outline" size={40} />
      <Text style={{ marginTop: 10 }}>이미지를 업로드 해주세요</Text>
    </View>
  );
}

export default HostingSkeleton;
