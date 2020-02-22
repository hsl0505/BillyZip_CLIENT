import React from 'react';
import { ScrollView, View, KeyboardAvoidingView } from 'react-native';
import HostingPostComponent from '../../../components/UserInfo/Hosting/HostingPostComponent';

interface Props {
  isEdit: string;
  houseId: number;
}

function HostingPost(props: Props): JSX.Element {
  const { isEdit, houseId } = props;
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', marginTop: 25 }}>
      <KeyboardAvoidingView behavior="position">
        <ScrollView removeClippedSubviews keyboardShouldPersistTaps="always">
          <HostingPostComponent isEdit={isEdit} houseId={houseId} />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

export default HostingPost;
