import React from 'react';
import { View } from 'react-native';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import ReviewComponent from '../../components/Reviews/ReviewComponent';

interface Props {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function ReviewScreen(props: Props): JSX.Element {
  const { navigation } = props;
  const avgRating = navigation.getParam('avgRating');
  const reviews = navigation.getParam('reviews');
  const houseId = navigation.getParam('houseId');
  const isFav = navigation.getParam('isFav');
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', marginTop: 25 }}>
      <ReviewComponent
        avgRating={avgRating}
        reviews={reviews}
        houseId={houseId}
        isFav={isFav}
      />
    </View>
  );
}

export default withNavigation(ReviewScreen);
