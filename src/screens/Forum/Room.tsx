import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Input, Avatar } from 'react-native-elements';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';
import socket from '../../util/socket';
import axiosInstance from '../../util/axiosInstance';

interface Props {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

interface Msg {
  name: string;
  msg: string;
}

function Room(props: Props): JSX.Element {
  // ! 매물상세에서 send a message를 눌러 이 컴포넌트로 들어올 때 props로 호스트의 hostId를 받는다.
  const { navigation } = props;

  const hostId = navigation.getParam('hostId');
  const myId = navigation.getParam('myId');
  const myName = navigation.getParam('myName');

  const [chat, setChat] = useState('');
  const [messages, setMessages] = useState<Msg[]>([]);

  console.log('여긴가..?', messages);

  useEffect(() => {
    if (messages.length === 0) {
      // console.log('포스트?');
      axiosInstance
        .post('forum/room', {
          hostId,
        })
        .then((res) => {
          if (JSON.parse(res.data.forumLog).length !== 0) {
            setMessages(JSON.parse(res.data.forumLog));
          } else {
            setMessages([{ name: '', msg: '' }]);
          }
        })
        .catch((err) => console.log('로그가 존재하지 않습니다.', err));
    }

    socket.emit('joinRoom', myId);

    if (hostId) {
      socket.emit('joinRoom', hostId);
    }

    socket.on('chat', (msg: ConcatArray<never>) => {
      setMessages(messages.concat(msg));
    });

    const handleBlur = navigation.addListener('didBlur', () => {
      // console.log('디드 블러?');
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
    });

    return (): void => {
      handleBlur.remove();
    };
  }, [hostId, messages, myId, navigation]);

  const handleMessageToHost = (roomId: number): void => {
    socket.emit('chat', roomId, chat, myName);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <KeyboardAvoidingView behavior="position">
        <ScrollView keyboardShouldPersistTaps="always">
          <Text
            style={{
              marginTop: 40,
              paddingTop: 15,
              fontSize: 26,
              fontWeight: 'bold',
              marginLeft: 15,
            }}
          >
            포럼 현황
          </Text>
          {messages.map((message) => (
            <View
              key={`${new Date().getFullYear()}${new Date().getMonth()}${new Date().getDate()}${new Date().getHours()}${new Date().getMinutes()}${new Date().getSeconds()}${new Date().getMilliseconds()}`}
              style={{
                flexDirection: 'row',
                marginLeft: 30,
                marginTop: 15,
              }}
            >
              <View style={{ flexDirection: 'column' }}>
                <Avatar rounded icon={{ name: 'user', type: 'font-awesome' }} />

                <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>
                  {message.name}
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#BDBDBD',
                  borderRadius: 25,
                  width: 250,
                  height: 80,
                  marginLeft: 10,
                  backgroundColor:
                    message.name === myName ? 'rgb(102,051,204)' : '#BDBDBD',
                  padding: 5,
                }}
              >
                <Text
                  style={{
                    margin: 5,
                    fontWeight: 'bold',
                    color: message.name === myName ? '#fff' : 'black',
                  }}
                >
                  {message.msg}
                </Text>
              </View>
            </View>
          ))}

          <Input
            placeholder={`${myName} 님의 의견을 여기에 적어 주세요.`}
            clearButtonMode="always"
            onChangeText={(text): void => {
              setChat(text);
            }}
            value={chat}
            containerStyle={{
              marginTop: 10,
              marginHorizontal: 20,
              alignSelf: 'center',
              paddingBottom: 60,
            }}
            inputContainerStyle={{ marginHorizontal: 5 }}
            rightIcon={
              <AntDesign
                name="upcircleo"
                size={28}
                style={{ marginRight: 8 }}
                onPress={(): void => {
                  handleMessageToHost(hostId || myId);
                  setChat('');
                }}
              />
            }
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

export default React.memo(withNavigation(Room));
