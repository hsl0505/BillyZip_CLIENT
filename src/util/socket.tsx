import io from 'socket.io-client';
// import ENV from '../util/env';

const socket = io('http://192.168.219.102:4000', {
    transports: ['websocket']
  });

  export default socket;