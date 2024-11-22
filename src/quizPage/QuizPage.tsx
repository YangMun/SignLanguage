import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CameraComponent from '../common/CameraComponent';

export default function QuizPage() {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const aspectRatio = 4/3;
  const videoHeight = screenWidth * aspectRatio;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>퀴즈</Text>
      </View>
      
      {/* 카메라 영역 */}
      <View style={[styles.cameraSection, { height: videoHeight }]}>
        <CameraComponent style={styles.camera} facing="front" />
      </View>

      {/* 하단 컨트롤 영역 */}
      <View style={styles.controlSection}>
        <View style={styles.quizContainer}>
          <Text style={styles.questionText}>예제가 표시될 영역</Text>
        </View>
        
        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipButtonText}>건너뛰기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#4A90E2',
    paddingBottom: 20,
  },
  backButton: {
    marginRight: 15,
  },
  backButtonText: {
    fontSize: 24,
    color: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraSection: {
    backgroundColor: '#000',
    width: '100%',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  controlSection: {
    backgroundColor: '#fff',
    padding: 15,
    paddingBottom: 25,
  },
  quizContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  skipButton: {
    backgroundColor: '#4A90E2',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  skipButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  placeholderText: {
    color: '#fff',
    fontSize: 16,
  },
});
