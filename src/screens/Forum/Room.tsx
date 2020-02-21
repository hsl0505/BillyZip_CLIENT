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
  const { navigation } = props;
  const hostId = navigation ? navigation.getParam('hostId') : undefined;

  // hostId = 1;
  console.log('hostId ?? ', hostId);
  console.log('navigation ?? ', navigation); //   "detailHostId": 3,  "footerHostId": 1

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
      .catch((err) => console.log('로그가 존재하지 않습니다.', err));

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
        placeholder={`${myName}님의 의견을 여기에 적어 주세요.`}
        clearButtonMode="always"
        onChangeText={(text): void => {
          setChat(text);
        }}
        value={chat}
      />
      <Button
        title="전송"
        onPress={(): any => {
          handleMessageToHost(hostId || myId);
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

        }}
      />
      <Button
        title="포럼 이용규칙"
        onPress={(): any => {
          props.navigation.navigate('ForumNotice');
          // 공지 오버레이 띄우기
        }}
      />
    </View>
  );
}

export default withNavigation(Room);
// export default React.memo(Room);
