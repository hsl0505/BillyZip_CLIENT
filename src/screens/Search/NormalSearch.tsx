import React from 'react';
import { View, Text } from 'react-native';

function NormalSearch(): JSX.Element {
  return (
    <View>
      <Text> Normal Search !</Text>
    </View>
  );
}

export default NormalSearch;

// 컴포넌트 만들어서 여기서 렌더시키기

// 컴포넌트의 종류
// 검색필터: default value = null

// 서버에 요청해야 하는 property 종류
/**
  plan
  type
  year
  access
  adminDistrict
  secondFloor
  parking
  aircon
  autoLock
  tv
  bed
  washing
  allowPet
 */

// 검색 이후엔 결과물 렌더링 => 유형별 매물페이지 참고
