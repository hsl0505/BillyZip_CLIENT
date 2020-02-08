import { AxiosRequestConfig } from 'axios';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { TEST_IP } from 'react-native-dotenv';

const axiosConfig: AxiosRequestConfig = {
  baseURL: `${TEST_IP}`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

export default axiosConfig;
