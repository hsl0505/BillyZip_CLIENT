import React from 'react';
import { View } from 'react-native';
import ReviewComponent from '../../components/Reviews/ReviewComponent';

function ReviewScreen(): JSX.Element {
  // 리뷰스, 평균 레이팅 받기
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ReviewComponent />
    </View>
  );
}

export default ReviewScreen;
