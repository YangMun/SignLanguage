import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { CameraView as ExpoCameraView, CameraType, useCameraPermissions } from 'expo-camera';

interface CameraViewProps {
  style?: object;
}

export default function CameraView({ style }: CameraViewProps) {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View style={[styles.container, style]} />;
  }

  if (!permission.granted) {
    return (
      <View style={[styles.container, style]}>
        <Text style={styles.text}>카메라 권한이 필요합니다</Text>
        <TouchableOpacity 
          onPress={requestPermission}
          style={styles.button}
        >
          <Text style={styles.buttonText}>권한 허용하기</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={[styles.container, style]}>
      <ExpoCameraView 
        style={styles.camera}
        facing={facing}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.flipButton} 
            onPress={toggleCameraFacing}
          >
            <Text style={styles.text}>카메라 전환</Text>
          </TouchableOpacity>
        </View>
      </ExpoCameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    overflow: 'hidden',
  },
  camera: {
    flex: 1,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 20,
  },
  flipButton: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 10,
    borderRadius: 5,
  },
});