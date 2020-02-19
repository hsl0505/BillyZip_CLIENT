import React, { useState, useEffect } from 'react';
import { Text, View, Button, AsyncStorage } from 'react-native';
import { Input } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import socket from '../../util/socket';
import axiosInstance from '../../util/axiosInstance';

let key = 0;
let myId: any;
let myName: any;

function Room(props: any): JSX.Element {
  // ! 매물상세에서 send a message를 눌러 이 컴포넌트로 들어올 때 props로 호스트의 hostId를 받는다.
  let { hostId } = props;
  const { navigation } = props;
  const data = navigation ? navigation.getParam('data') : undefined;

  console.log('data', data);
  console.log('??', hostId);
  // const hostId = 1;


  // 풋터에서 왔다면 hostId 없기 때문에 hostId = data; 해준다.
  if (!hostId) {
    hostId = data;
  }

  const [chat, setChat] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axiosInstance
      .post('forum/room', {
        hostId,
      })
      .then((res) => {
        setMessages(JSON.parse(res.data.forumLog));
      })
      .catch((err) => console.log(err));

    const getMyId = async (): Promise<void> => {
      myId = await AsyncStorage.getItem('userId');
      myName = await AsyncStorage.getItem('userName');
      socket.emit('joinRoom', myId);
    };
    getMyId();

    if (hostId) {
      socket.emit('joinRoom', hostId);
    }

    socket.on('chat', (msg: any) => {
      console.log(msg);
      // const message = `${name}: ${msg}`;
      setMessages((prev) => {
        return prev.concat(msg);
      });
    });
  }, [hostId]);

  const handleMessageToHost = (roomId: number): void => {
    socket.emit('chat', roomId, chat, myName);
    setChat('');
  };

  return (
    <View>
      {messages.map((message: any) => (
        // eslint-disable-next-line no-plusplus
        <Text key={key++}>{message}</Text>
      ))}
      <Input
        placeholder="입력해주세여"
        clearButtonMode="always"
        onChangeText={(text): void => {
          setChat(text);
        }}
        value={chat}
      />
      <Button
        title="전송"
        onPress={(): any => {
          axiosInstance
            .post('forum', {
              messages,
              myId,
              hostId,
            })
            .then((res) => {
              if (res.status === 200) {
                console.log('전송 성공');
              }
            })
            .catch((err) => console.error(err));

          handleMessageToHost(hostId || myId);
        }}
      />
      <Button
        title="포럼 리스트로 나가기"
        onPress={(): any => {
          props.navigation.navigate('Forum');
        }}
      />
    </View>
  );
}

export default withNavigation(Room);
// export default React.memo(Room);
