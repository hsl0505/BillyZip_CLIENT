import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

import HostingApplyComponent from '../../../components/UserInfo/Hosting/HostingApplyComponent';
import axiosInstance from '../../../util/axiosInstance';

interface Props {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function HostingApplyScreen(props: Props): JSX.Element {
  const { navigation } = props;
  const [applyList, setApplyList] = useState({
    apply: [],
    images: [],
  });

  useEffect(() => {
    if (applyList.apply.length === 0) {
      axiosInstance
        .get('application')
        .then((res) => setApplyList(res.data))
        .catch((err) => console.log(err));
    }

    const subscribe = navigation.addListener('willFocus', () => {
      axiosInstance
        .get('application')
        .then((res) => {
          setApplyList(res.data);
        })
        .catch((err) => console.log(err));
    });

    return (): void => {
      subscribe.remove();
    };
  }, [applyList.apply.length, navigation]);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView removeClippedSubviews>
        <HostingApplyComponent applyList={applyList} />
      </ScrollView>
    </View>
  );
}

export default withNavigation(HostingApplyScreen);
