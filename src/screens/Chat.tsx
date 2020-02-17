import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Input } from 'react-native-elements';
import socket from '../util/socket';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

let key = 0;

function Chat(): JSX.Element {
  const [chat, setChat] = useState('');
  const [messages, setMessages] = useState([]);

  console.log('messages is ', messages);

  useEffect(() => {
    socket.on('chat', (data: any) => {
      console.log('data.msg is ', data.msg);
      setMessages(messages.concat(data.msg));
    });
  }, [chat, messages]);

  const handleNewMessage = (): void => {
    socket.emit('chat', {
      msg: chat,
    });
  };

  return (
    <View style={styles.container}>
      <Text>Chat</Text>
      {messages.map((message: any) => (
        // eslint-disable-next-line no-plusplus
        <Text key={key++}>{message}</Text>
      ))}
      <Input
        placeholder="입력해주세여"
        onChangeText={(text): void => {
          setChat(text);
        }}
      />
      <Button
        title="Send"
        onPress={(): any => {
          handleNewMessage();
        }}
      />
    </View>
  );
}

export default React.memo(Chat);

// * 채팅 개시는 상세 매물페이지, 채팅하기 누르면 채팅화면으로 이동

// ! 데이터베이스에 저장하고 활용하기
// * 개시된 채팅은 풋터 채팅에서 리스트로 확인가능 => 서버 디비에서 개시된 채팅로그를 가져와야 할 듯 / GET 메소드, /user/chat
// * 2개의 새로운 엔티티 필요: 1) 로그ID / 집주인 유저ID / 문의 유저ID, 2) 로그ID / 로그내용

// * 리스트를 누르면 집주인과 채팅한 기록을 디비로 부터 가져와서 렌더링
