import io from 'socket.io-client';
import ENV from '../util/env';

const socket = io(ENV.TEST_IP, {
    transports: ['websocket']
  });

  export default socket;