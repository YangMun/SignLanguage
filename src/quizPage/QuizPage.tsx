import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CameraView from '../common/CameraView';

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
      <CameraView style={[styles.cameraSection, { height: videoHeight }]} />

      {/* 하단 컨트롤 영역 */}
      <View style={styles.controlSection}>
        <View style={styles.quizContainer}>
          <Text style={styles.questionLabel}>문제</Text>
          <Text style={styles.questionText}>예제가 표시될 영역</Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>다시 찍기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.primaryButton]}>
            <Text style={styles.actionButtonText}>제출하기</Text>
          </TouchableOpacity>
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
  controlSection: {
    backgroundColor: '#fff',
    padding: 20,
    paddingBottom: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  quizContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
  },
  questionLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    gap: 10,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#4A90E2',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  skipButton: {
    backgroundColor: '#F0F0F0',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  skipButtonText: {
    color: '#666',
    fontSize: 14,
  },
});
