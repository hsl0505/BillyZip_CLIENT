import axios, { AxiosInstance } from 'axios';
import { AsyncStorage } from 'react-native';
import ENV from './env';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
// import { TEST_IP } from 'react-native-dotenv';


const axiosInstance: AxiosInstance = axios.create({
  baseURL: ENV.TEST_IP,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosInstance.defaults.baseURL = ENV.TEST_IP;
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
axiosInstance.defaults.withCredentials = true;

axiosInstance.interceptors.request.use(
  async (config) => {
    const customConfig = config;
    const userToken = await AsyncStorage.getItem('userToken');
    if (userToken) {
      customConfig.headers.Authorization = `Bearer ${userToken}`;
    }
    return customConfig;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

// Authorization: `Bearer ${access_token}`

// const axiosConfig: AxiosRequestConfig = {
//   baseURL: `${TEST_IP}`,
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   withCredentials: true,

// };

export default axiosInstance;
