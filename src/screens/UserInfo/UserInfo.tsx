import React from 'react';
import { View } from 'react-native';
import UserInfoList from '../../components/UserInfo/UserInfoList';

// 스택 네비게이션
// 1: 모든 버튼이 있는 스크린
// 2: 내정보
// 3: 현재 현황?
// 4: 호스팅관리 페이지 -> 호스팅 현황 /호스팅  이 스크린에 또 스택을 써서 이동하는 느낌 ..........

function UserInfo(): JSX.Element {
  return (
    <View>
      <UserInfoList />
    </View>
  );
}

export default UserInfo;
