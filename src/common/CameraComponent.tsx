import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Camera, CameraView } from 'expo-camera';

interface CameraComponentProps {
  style?: object;
  facing?: 'front' | 'back';
}

export default function CameraComponent({ 
  style, 
  facing = 'front'
}: CameraComponentProps) {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View style={styles.container}><Text>카메라 권한 요청 중...</Text></View>;
  }
  if (hasPermission === false) {
    return <View style={styles.container}><Text>카메라 접근 권한이 없습니다.</Text></View>;
  }

  return (
    <CameraView
      style={[styles.camera, style]}
      facing={facing}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
  },
});