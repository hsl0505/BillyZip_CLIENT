import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import HostingManagementComponent from '../../../components/UserInfo/Hosting/HostingManagementComponent';
import axiosInstance from '../../../util/axiosInstance';

interface Props {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function HostingManagement(props: Props): JSX.Element {
  const { navigation } = props;
  const [myHosting, setMyHosting] = useState([]);

  useEffect(() => {
    if (myHosting.length === 0) {
      axiosInstance
        .get('users/list')
        .then((res) => {
          setMyHosting(res.data);
        })
        .catch((err) => console.log(err));
    }

    const subscribe = navigation.addListener('willFocus', () => {
      axiosInstance
        .get('users/list')
        .then((res) => {
          setMyHosting(res.data);
        })
        .catch((err) => console.log(err));
    });

    return (): void => {
      subscribe.remove();
    };
  }, [myHosting.length, navigation]);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView removeClippedSubviews>
        <HostingManagementComponent myHosting={myHosting} />
      </ScrollView>
    </View>
  );
}

export default withNavigation(HostingManagement);
