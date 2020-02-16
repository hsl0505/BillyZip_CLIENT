import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import {
  withNavigation,
  //   NavigationScreenProp,
  //   NavigationRoute,
  //   NavigationParams,
} from 'react-navigation';

// interface Props {
//   navigation: NavigationScreenProp<
//     NavigationRoute<NavigationParams>,
//     NavigationParams
//   >;
// }

const styles = StyleSheet.create({
  ButtonViewStyle: {
    backgroundColor: '#D1D1D1',
    borderColor: '#dfe4ea',
    borderWidth: 1,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    width: '90%',
  },
  TextViewStyle: {
    backgroundColor: '#F9F9F9',
    borderColor: '#dfe4ea',
    borderWidth: 1,

    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    width: '90%',
  },

  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 15,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
});

function Mobile(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>변경할 휴대폰 번호를 입력하세요</Text>

      <Input
        placeholder="핸드폰 번호를 입력해주세요"
        containerStyle={styles.TextViewStyle}
        // rightIcon={}
        underlineColorAndroid="transparent"
      />

      <Input
        placeholder="인증번호를 입력해주세요 예)1234"
        containerStyle={styles.TextViewStyle}
        underlineColorAndroid="transparent"
      />
      <Button
        title="확인"
        buttonStyle={styles.ButtonViewStyle}
        onPress={(): void => {
          console.log('핸드폰 번호 작동하나요?');
        }}
      />
    </View>
  );
}

export default withNavigation(Mobile);
