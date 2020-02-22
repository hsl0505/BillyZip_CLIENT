import io from 'socket.io-client';
import ENV from './env';

const ioIp = ENV.TEST_IP.slice(0, ENV.TEST_IP.length);
// console.log('아이피 ??????', ioIp);

const socket = io(`${ioIp}`, {
  transports: ['websocket'],
});

export default socket;
