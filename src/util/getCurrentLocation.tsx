import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const getCurrentLocation = async (): Promise<Location.LocationData | void> => {
  // 위치정보 허락
  const { status } = await Permissions.askAsync(Permissions.LOCATION);
  console.log(status);

  if (status === 'granted') {
    // 서비스 상태 체크 후 위치 얻기
    const gpsServiceStatus = await Location.hasServicesEnabledAsync();
    if (gpsServiceStatus) {
      const currentLocation = await Location.getCurrentPositionAsync({});
      console.log(currentLocation);
      return currentLocation;
    }
  }
};

export default getCurrentLocation;
