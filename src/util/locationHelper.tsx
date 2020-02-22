import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const locationHelper = {
  reqLocationPermission: async (cb: Function): Promise<void> => {
    try {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
      cb(status);
    } catch (err) {
      console.log('location err :', err);
    }
  },
  getLocationPermission: async (): Promise<string | undefined> => {
    try {
      const { status } = await Permissions.getAsync(Permissions.LOCATION);
      if (status === 'granted') {
        return 'granted';
      }
      return 'notGranted';
    } catch (err) {
      console.log(err);
      return undefined;
    }
  },
  getLocationFromAddress: async (
    cb: Function,
    address: string,
  ): Promise<void> => {
    try {
      const [result] = await Location.geocodeAsync(address);
      cb([result.latitude, result.longitude]);
    } catch (err) {
      console.log('location err :', err);
    }
  },
};

export default locationHelper;
