import React from 'react';
import { ScrollView, View } from 'react-native';
import HostingPostComponent from '../../../components/UserInfo/Hosting/HostingPostComponent';

function HostingPost(): JSX.Element {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', marginTop: 30 }}>
      <ScrollView
        removeClippedSubviews
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
      >
        <HostingPostComponent />
      </ScrollView>
    </View>
  );
}

export default HostingPost;
