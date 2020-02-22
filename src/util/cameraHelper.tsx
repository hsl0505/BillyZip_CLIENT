import * as ImagePicker from 'expo-image-picker';

interface Items {
  uri?: string;
  type?: string;
}

const cameraHelper = {
  reqRollPermission: async (cb: Function): Promise<void> => {
    try {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      cb(status);
    } catch (err) {
      console.log('camera err :', console.log(err));
    }
  },
  getRollPermission: async (): Promise<string | undefined> => {
    try {
      const { status } = await ImagePicker.getCameraRollPermissionsAsync();
      if (status === 'granted') {
        return 'granted';
      }
      return 'notGranted';
    } catch (err) {
      console.log(err);
      return undefined;
    }
  },

  getPhoto: async (
    cb: Function,
    previous: Items[],
    cb2: Function,
  ): Promise<void> => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        allowsMultipleSelection: true,
      });

      if (!result.cancelled) {
        if (!previous[0].uri) {
          cb([result]);
          cb2(false);
        } else {
          cb(previous.concat([result]));
          cb2(false);
        }
      }
    } catch (err) {
      console.log('camera err : ', console.log(err));
    }
  },
  reqCameraPermission: async (cb: Function): Promise<void> => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      cb(status);
    } catch (err) {
      console.log('camera err', err);
    }
  },
  getCameraPermission: async (): Promise<string | undefined> => {
    try {
      const { status } = await ImagePicker.getCameraPermissionsAsync();
      if (status === 'granted') {
        return 'granted';
      }
      return 'notGranted';
    } catch (err) {
      console.log(err);
      return undefined;
    }
  },

  getPhotoByCamera: async (
    cb: Function,
    previous: Items[],
    cb2: Function,
  ): Promise<void> => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
      if (!result.cancelled) {
        if (!previous[0].uri) {
          cb([result]);
          cb2(false);
        } else {
          cb(previous.concat([result]));
          cb2(false);
        }
      }
    } catch (err) {
      console.log('camera err : ', err);
    }
  },
};

export default cameraHelper;
