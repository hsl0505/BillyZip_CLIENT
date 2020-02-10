import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

// 스택 네비게이션을 쌓아주셔야됩니다
// 1 : 버튼 분기 스크린
// 2 스크린 : 검색
// 3 스크린 : 지도 검색

function Search(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  );
}

export default Search;
