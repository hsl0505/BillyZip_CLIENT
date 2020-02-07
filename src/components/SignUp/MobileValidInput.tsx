import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

function MobileValidInput(
  props: Partial<NavigationInjectedProps>,
): JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>핸드폰 인증</Text>
      <Button
        title="임시 인증완료버튼"
        onPress={(): boolean => {
          if (props.navigation) {
            props.navigation.navigate('SignUpInputScreen', {
              mobiletest: '010-1111-1111',
            });
          }
          return false;
        }}
      />
    </View>
  );
}
export default withNavigation(MobileValidInput);
