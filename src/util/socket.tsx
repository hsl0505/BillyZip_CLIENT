import io from 'socket.io-client';
import ENV from './env';

const ioIp = ENV.TEST_IP.slice(0, ENV.TEST_IP.length - 1);

const socket = io(`${ioIp}`, {
  transports: ['websocket'],
});

export default socket;
