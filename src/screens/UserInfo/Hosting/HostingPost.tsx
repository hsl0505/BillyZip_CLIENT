import React from 'react';
import { ScrollView, View, KeyboardAvoidingView } from 'react-native';
import HostingPostComponent from '../../../components/UserInfo/Hosting/HostingPostComponent';

function HostingPost(): JSX.Element {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', marginTop: 30 }}>
      <KeyboardAvoidingView behavior="position">
        <ScrollView removeClippedSubviews keyboardShouldPersistTaps="always">
          <HostingPostComponent />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

export default HostingPost;
