import React from 'react';
import { View } from 'react-native';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import MapSearchForm from '../../components/Search/MapSearchForm';
// import GoogleMapComponent from '../../components/Search/GoogleMapComponent'

interface Props {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function MapSearch(props: Props): JSX.Element {
  const { navigation } = props;
  // 아래 data는 모든 매물에 대한 정보임. 지도에 표현할 것
  const data = navigation ? navigation.getParam('data') : undefined;
  return (
    <View>
      <MapSearchForm data={data} />
      {/* <GoogleMapComponent data={data} /> */}
    </View>
  );
}

export default withNavigation(MapSearch);

// * 컴포넌트
// 검색창 생성
// 내 위치 기준 지도

// * 일반
// 1. 스크린에 들어가면 일단 GET /houses 요청해서 매물받기
// 2. 지도에 모든 매물의 마커와 타이틀을 표현
// 3. 타이틀을 누르면 매물 상세페이지로 이동

// * 검색
// 1. 검색창에 입력하여 POST /houses/search로 요청하여 매물받기
// 2. 응답 받은 매물을 지도에 마커와 타이틀로 표현
