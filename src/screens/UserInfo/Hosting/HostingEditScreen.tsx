import React from 'react';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import HostingPost from './HostingPost';

interface Props {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function HostingEditScreen(props: Props): JSX.Element {
  const { navigation } = props;
  const houseId = navigation.getParam('houseId');
  const isEdit = 'edit';
  return <HostingPost isEdit={isEdit} houseId={houseId} />;
}

export default withNavigation(HostingEditScreen);
