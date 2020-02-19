import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
import socket from '../util/socket';

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     flex: 1,
//     justifyContent: 'center',
//   },
// });

let key = 0;

// ! async storage에 있는 userId 가져온다.
const myId = 1;

function Room(props: any): JSX.Element {
  // ! 매물상세에서 send a message를 눌러 이 컴포넌트로 들어올 때 props로 호스트의 hostId를 받는다.
  const { hostId } = props;

  const [chat, setChat] = useState('');
  const [messages, setMessages] = useState([]);

  // ! 모든 유저는 자신만의 룸이 있다.
  socket.emit('joinRoom', myId);

  // ! 문의할 떄는 다른 사람의 룸에 조인한다.
  // ! 문의할 떄는 props로 hostId 받고 들어오기 때문에 아래 코드가 실행된다.
  // ! 문의가 아닌 경우는 props로 받지 않기 때문에 실행되지 않는다.
  if (hostId) {
    socket.emit('joinRoom', hostId);
  }

  useEffect(() => {
    socket.on('chat', (msg: any) => {
      console.log('다른 사람으로 부터 받은 메세지 : ', msg);
      setMessages((prev) => {
        return prev.concat(msg);
      });
    });
  }, []);

  const handleMessageToHost = (roomId: number): void => {
    socket.emit('chat', roomId, chat);
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
        title="Send"
        onPress={(): any => {
          // ! 문의하기 위해 이 스크린에 들어왔으면 hostId가 있다. => hostId
          // ! 아니라면 houtId 없기 때문에 => myId
          handleMessageToHost(hostId || myId);
        }}
      />
    </View>
  );
}

export default React.memo(Room);

// * 채팅 개시는 상세 매물페이지, 채팅하기 누르면 채팅화면으로 이동

// ! 데이터베이스에 저장하고 활용하기
// * 개시된 채팅은 풋터 채팅에서 리스트로 확인가능 => 서버 디비에서 개시된 채팅로그를 가져와야 할 듯 / GET 메소드, /user/chat
// * 새로운 엔티티 필요: 1) id / hostId / userId / log => 하나로 log만 업데이트 해도 될듯

// * 리스트를 누르면 채팅한 logfmf 디비로 부터 가져와서 렌더링
// ! 데이터베이스에서 가져온 메세지가 배열의 앞에 있어야 한다

// ! 채팅 리스트 중에 하나 들어갈 때, 그 방의 디비 데이터의 hostId가 자신의 userId와 같으면 자신의 => userId 사용
// ! 문의 유저
