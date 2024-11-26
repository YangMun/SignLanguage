import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';
import { useEffect } from 'react';

interface CameraViewProps {
  style?: object;
}

export default function CameraView({ style }: CameraViewProps) {
  const device = useCameraDevice('back');
  
  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    const permission = await Camera.requestCameraPermission();
    if (permission === 'denied') console.warn('카메라 권한이 거부되었습니다');
  };

  if (device == null) {
    return (
      <View style={[styles.container, style]}>
        <Text>카메라를 사용할 수 없습니다</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, style]}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    overflow: 'hidden',
  },
}); 