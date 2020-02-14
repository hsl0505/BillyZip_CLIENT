import React from 'react';
import { ScrollView, View } from 'react-native';
import HostingPostComponent from '../../../components/UserInfo/Hosting/HostingPostComponent';

function HostingPost(): JSX.Element {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView removeClippedSubviews>
        <HostingPostComponent />
      </ScrollView>
    </View>
  );
}

export default HostingPost;
