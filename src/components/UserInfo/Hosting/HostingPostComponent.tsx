import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import HostingImagePicker from './HostingImagePicker';
import axiosInstance from '../../../util/axiosInstance';
import cameraHelper from '../../../util/cameraHelper';
import locationHelper from '../../../util/locationHelper';

interface Props {
  isEdit: string;
  houseId: number;
}

function HostingPostComponent(props: Props): JSX.Element {
  const { isEdit, houseId } = props;
  const [editTarget, setTarget] = useState();
  const [hasCamera, setCamera] = useState();
  const [hasCameraRoll, setCameraRoll] = useState();
  const [hasLocation, setLocationPermission] = useState();
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    async function permissionCheck(): Promise<void> {
      const rollPermission = await cameraHelper.getRollPermission();
      const cameraPermission = await cameraHelper.getCameraPermission();
      const locationPermission = await locationHelper.getLocationPermission();

      if (rollPermission !== 'granted') {
        await cameraHelper.reqRollPermission(setCameraRoll);
      } else {
        setCameraRoll(rollPermission);
      }
      if (cameraPermission !== 'granted') {
        await cameraHelper.reqCameraPermission(setCamera);
      } else {
        setCamera(cameraPermission);
      }
      if (locationPermission !== 'granted') {
        await locationHelper.reqLocationPermission(setLocationPermission);
      } else {
        setLocationPermission(locationPermission);
      }

      if (isEdit === 'edit' && !editTarget) {
        await axiosInstance
          .get(`houses/${houseId}`)
          .then((res) => {
            setTarget(res.data);
            setReady(true);
          })
          .catch((err) => console.log(err));
      } else {
        await setReady(true);
      }
    }

    permissionCheck();
  }, [editTarget, houseId, isEdit]);

  return (
    <View style={{ flex: 1 }}>
      {isReady ? (
        <View style={{ flex: 1 }}>
          <View style={{ marginLeft: 15, marginVertical: 15 }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
              {isEdit === 'edit' ? '호스팅 수정하기' : '호스팅'}
            </Text>
          </View>
          <HostingImagePicker
            editTarget={editTarget}
            hasCamera={hasCamera}
            hasCameraRoll={hasCameraRoll}
            hasLocation={hasLocation}
          />
        </View>
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
}

export default HostingPostComponent;
