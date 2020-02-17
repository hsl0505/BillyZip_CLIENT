import * as ImagePicker from 'expo-image-picker';

interface Items {
  uri?: string;
  type?: string;
}

const cameraHelper = {
  getRollPermission: async (cb: Function): Promise<void> => {
    try {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      cb(status);
    } catch (err) {
      console.log('camera err :', console.log(err));
    }
  },
  getPhoto: async (cb: Function, previous: Items[]): Promise<void> => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        // base64: true,
        aspect: [4, 3],
        allowsMultipleSelection: true,
      });
      if (!result.cancelled) {
        if (!previous[0].uri) {
          cb([result]);
        } else {
          cb(previous.concat([result]));
        }
      }
    } catch (err) {
      console.log('camera err : ', console.log(err));
    }
  },
  getCameraPermission: async (cb: Function): Promise<void> => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      cb(status);
    } catch (err) {
      console.log('camera err', err);
    }
  },
  getPhotoByCamera: async (cb: Function, previous: Items[]): Promise<void> => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
      if (!result.cancelled) {
        if (!previous[0].uri) {
          cb([result]);
        } else {
          cb(previous.concat([result]));
        }
      }
    } catch (err) {
      console.log('camera err : ', err);
    }
  },
};

export default cameraHelper;
