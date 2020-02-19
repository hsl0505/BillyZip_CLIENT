import React, { useEffect, useState } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
// import ForumEntry from '../../components/Forum/ForumEntry';
import { ListItem } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import axiosInstance from '../../util/axiosInstance';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

let myId: any;

function Forum(props: any): JSX.Element {
  const [forums, setForums] = useState([]);

  useEffect(() => {
    const getMyId = async (): Promise<void> => {
      myId = await AsyncStorage.getItem('userId');

      axiosInstance
        .post('forum/list', {
          myId,
        })
        .then((res) => {
          console.log('포럼리스트', res.data);
          setForums(res.data);
        });
    };

    getMyId();

  }, []);

  return (
    <View style={styles.container}>
      <View>
        {forums.map((forum: any, i: number) => (
          <ListItem
            key={i.toString()}
            title={`'${forum.hostName}' 호스트의 포럼입니다.`}
            // leftIcon={<SimpleLineIcons name={forum.icon} size={28} />}
            bottomDivider
            chevron
            onPress={(): void => {
              console.log('리스트 눌렸다~');
              // hostId 넣어주기
              console.log(forum.hostId);
              props.navigation.navigate('Room', {data: forum.hostId});
            }}
          />
        ))}
      </View>
    </View>
  );
}

export default withNavigation(Forum);
