import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const locationHelper = {
  getLocationPermission: async (cb: Function): Promise<void> => {
    try {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
      cb(status);
    } catch (err) {
      console.log('location err :', err);
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
