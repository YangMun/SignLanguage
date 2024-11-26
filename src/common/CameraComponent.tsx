import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

interface CameraComponentProps {
  style?: object;
  facing?: CameraType;
}

export default function CameraComponent({ 
  style, 
  facing = 'front'
}: CameraComponentProps) {
  const [permission, requestPermission] = useCameraPermissions();
  const [currentFacing, setCurrentFacing] = useState<CameraType>(facing);

  if (!permission) {
    // 카메라 권한 요청 중
    return <View style={styles.container}><Text>카메라 권한 요청 중...</Text></View>;
  }

  if (!permission.granted) {
    // 카메라 접근 권한이 없습니다.
    return (
      <View style={styles.container}>
        <Text>카메라 접근 권한이 없습니다.</Text>
        <Button onPress={requestPermission} title="권한 요청" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setCurrentFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <CameraView
      style={[styles.camera, style]}
      facing={currentFacing}
    >
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <Text style={styles.text}>카메라 전환</Text>
        </TouchableOpacity>
      </View>
    </CameraView>
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
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});