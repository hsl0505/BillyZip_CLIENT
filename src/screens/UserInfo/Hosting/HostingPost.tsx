import React from 'react';
import { ScrollView, View } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import HostingPostComponent from '../../../components/UserInfo/Hosting/HostingPostComponent';

function HostingPost(): JSX.Element {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* <KeyboardAvoidingView style={{ flex: 1 }} enabled> */}
      <ScrollView
        removeClippedSubviews
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
      >
        <HostingPostComponent />
      </ScrollView>
      {/* </KeyboardAvoidingView> */}
    </View>
  );
}

export default HostingPost;
