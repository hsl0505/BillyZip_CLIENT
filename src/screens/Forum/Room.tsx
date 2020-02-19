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
  // const { hostId } = props;
  const hostId = 1;

  const [chat, setChat] = useState('');
  const [messages, setMessages] = useState([]);

  console.log('myId is ', myId);

  // ! 모든 유저는 자신만의 룸이 있다.

  // ! 문의할 떄는 다른 사람의 룸에 조인한다.
  // ! 문의할 떄는 props로 hostId 받고 들어오기 때문에 아래 코드가 실행된다.
  // ! 문의가 아닌 경우는 props로 받지 않기 때문에 실행되지 않는다.
  if (hostId) {
    socket.emit('joinRoom', hostId);
  }

  useEffect(() => {
    const getMyId = async (): Promise<void> => {
      myId = await AsyncStorage.getItem('userId');
      myName = await AsyncStorage.getItem('userName');
      socket.emit('joinRoom', myId);
    };
    getMyId();

    socket.on('chat', (msg: any) => {
      console.log(msg);
      // const message = `${name}: ${msg}`;
      setMessages((prev) => {
        return prev.concat(msg);
      });
    });
  }, []);

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
          // ! 문의하기 위해 이 스크린에 들어왔으면 hostId가 있다. => hostId
          // ! 아니라면 houtId 없기 때문에 => myId
          handleMessageToHost(hostId || myId);
        }}
      />
      <Button
        title="나가기"
        onPress={(): any => {
          console.log('나가기~');
          // 서버에 요청보내서 서버에서 채팅로그 저장
          axiosInstance
            .post('forum', {
              messages,
              myId,
              hostId,
            })
            .then((res) => {
              if (res.status === 200) {
                // 그리고 forum 스크린으로 네비게이트
                props.navigation.navigate('Forum');
              }
            })
            .catch((err) => console.error(err));
        }}
      />
    </View>
  );
}

export default withNavigation(Room);
// export default React.memo(Room);
