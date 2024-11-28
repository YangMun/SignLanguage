import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface CameraViewProps {
  style?: object;
}

export default function CameraView({ style }: CameraViewProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>카메라 뷰</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  }
}); 