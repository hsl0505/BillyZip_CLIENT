/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Button,
} from 'react-native';
import { Input, Avatar } from 'react-native-elements';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
// import { AntDesign } from '@expo/vector-icons';
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

let key = 0;

function Room(props: Props): JSX.Element {
  const { navigation } = props;

  const hostId = navigation.getParam('hostId');
  const myId = navigation.getParam('myId');
  const myName = navigation.getParam('myName');

  const [chat, setChat] = useState('');
  const [messages, setMessages] = useState<Msg[]>([]);

  useEffect(() => {
    axiosInstance
      .post('forum/room', {
        hostId,
      })
      .then((res) => {
        setMessages(JSON.parse(res.data.forumLog));
      })
      .catch((err) => console.log('로그가 존재하지 않습니다.', err));

    socket.emit('joinRoom', myId);

    if (hostId) {
      socket.emit('joinRoom', hostId);
    }

    socket.on('chat', (msg: ConcatArray<never>) => {
      console.log('chat', msg);
      setMessages((prev) => {
        return prev.concat(msg);
      });
    });
  }, [hostId, myId]);

  const handleMessageToHost = (roomId: number): void => {
    socket.emit('chat', myId, roomId, chat, myName);
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
              // key={`${new Date().getFullYear()}${new Date().getMonth()}${new Date().getDate()}${new Date().getHours()}${new Date().getMinutes()}${new Date().getSeconds()}${new Date().getMilliseconds()}`}
              key={key++}
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
            // inputContainerStyle={{ marginHorizontal: 5 }}
            // rightIcon={
            //   <AntDesign
            //     name="upcircleo"
            //     size={28}
            //     style={{ marginRight: 8 }}
            //     onPress={(): void => {
            //       handleMessageToHost(hostId || myId);
            //     }}
            //   />
            // }
          />
          <Button
            title="전송"
            onPress={(): void => {
              handleMessageToHost(hostId);
              setChat('');
            }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

export default React.memo(withNavigation(Room));
