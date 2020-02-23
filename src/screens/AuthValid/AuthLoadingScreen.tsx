import React, { useEffect } from 'react';
import { AsyncStorage, View, StatusBar } from 'react-native';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

function AuthLoadingScreen(
  props: Partial<NavigationInjectedProps>,
): JSX.Element {
  // 토큰 확인 후 있으면 app으로, 없으면 로그인 스크린으로
  async function validFunc(): Promise<void> {
    try {
      const userToken = await AsyncStorage.getItem('userToken');

      if (props.navigation) {
        props.navigation.navigate(userToken ? 'App' : 'Auth');
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    validFunc();
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      <StatusBar hidden />
    </View>
  );
}

export default withNavigation(AuthLoadingScreen);
