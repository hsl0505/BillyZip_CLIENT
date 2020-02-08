import { AsyncStorage } from 'react-native';

const asyncStorageHelper = {
  setItem: async (key: string, value: string): Promise<void> => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (err) {
      console.log('Async storage error :', err);
    }
  },
  clear: async (): Promise<void> => {
    try {
      await AsyncStorage.clear();
    } catch (err) {
      console.log('Async storage error :', err);
    }
  },
};

export default asyncStorageHelper;
