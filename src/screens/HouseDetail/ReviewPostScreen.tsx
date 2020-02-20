import React from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import ReviewPostComponent from '../../components/Reviews/ReviewPostComponent';

interface Props {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function ReviewPostScreen(props: Props): JSX.Element {
  const { navigation } = props;
  const houseId = navigation.getParam('houseId');
  const isFav = navigation.getParam('isFav');
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={30}>
        <ScrollView removeClippedSubviews keyboardShouldPersistTaps="always">
          <ReviewPostComponent houseId={houseId} isFav={isFav} />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

export default withNavigation(ReviewPostScreen);
