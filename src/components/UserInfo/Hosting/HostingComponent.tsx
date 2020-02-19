import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ListItem, Overlay, Button } from 'react-native-elements';
import { SimpleLineIcons } from '@expo/vector-icons';

import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function HostingComponent(props: Props): JSX.Element {
  const [isVisible, setVisible] = useState(false);
  const IconList = [
    {
      title: '호스팅 관리',
      icon: 'book-open',
      routeName: 'HostingManagement',
    },
    {
      title: '호스팅 신청',
      icon: 'note',
      routeName: 'HostingPost',
    },
  ];
  return (
    <View style={{ marginTop: 25 }}>
      {IconList.map((item, i) => (
        <ListItem
          key={i.toString()}
          title={item.title}
          leftIcon={<SimpleLineIcons name={item.icon} size={28} />}
          bottomDivider
          chevron
          onPress={(): void => {
            if (item.routeName === 'HostingManagement') {
              props.navigation.navigate('HostingManagement');
            } else {
              setVisible(true);
            }
          }}
        />
      ))}
      <Overlay
        isVisible={isVisible}
        height={100}
        width={220}
        onBackdropPress={(): void => setVisible(false)}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ alignSelf: 'center', fontSize: 15, marginTop: 10 }}>
            호스팅을 신청하시겠습니까?
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-around',
            }}
          >
            <Button
              title="신청"
              onPress={(): void => {
                setVisible(false);
                props.navigation.navigate('HostingPost');
              }}
              type="clear"
            />
            <Button
              title="취소"
              onPress={(): void => setVisible(false)}
              type="clear"
            />
          </View>
        </View>
      </Overlay>
    </View>
  );
}

export default withNavigation(HostingComponent);
