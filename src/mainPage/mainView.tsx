import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons';
import { RootStackParamList } from '../types/navigation';

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function MainView() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>수화로 소통하는{'\n'}새로운 세상</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.mainIconContainer}>
          <FontAwesome5 
            name="sign-language" 
            size={100} 
            color="#4A90E2"
            style={styles.mainIcon}
          />
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity 
            style={[styles.card, styles.studyCard]}
            onPress={() => navigation.navigate('Study')}
          >
            <FontAwesome5 name="book-reader" size={32} color="#fff" />
            <Text style={styles.cardTitle}>수화 학습</Text>
            <Text style={styles.cardDescription}>기초부터 차근차근{'\n'}배워보세요</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.card, styles.quizCard]}
            onPress={() => navigation.navigate('Quiz')}
          >
            <FontAwesome5 name="question-circle" size={32} color="#fff" />
            <Text style={styles.cardTitle}>퀴즈 도전</Text>
            <Text style={styles.cardDescription}>학습한 내용을{'\n'}테스트해보세요</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.card, styles.translateCard]}
            onPress={() => navigation.navigate('Translate')}
          >
            <FontAwesome5 name="language" size={32} color="#fff" />
            <Text style={styles.cardTitle}>실시간 번역</Text>
            <Text style={styles.cardDescription}>카메라로 수화를{'\n'}번역해보세요</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>함께하는 수화, 더 넓은 세상</Text>
      </View>
    </View>
  );
}

const { width } = Dimensions.get('window');
const cardWidth = (width - 60) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 30,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
  },
  title: {
    paddingTop: 10,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C3E50',
    lineHeight: 36,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  mainIconContainer: {
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 75,
    width: 150,
    height: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  mainIcon: {
    transform: [{ rotate: '-15deg' }]
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  card: {
    width: cardWidth,
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    elevation: 5,
    height: 160,
  },
  studyCard: {
    backgroundColor: '#4A90E2',
  },
  quizCard: {
    backgroundColor: '#E74C3C',
  },
  translateCard: {
    backgroundColor: '#2ECC71',
    width: '100%',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
  },
  cardDescription: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.9,
    lineHeight: 20,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#95A5A6',
    fontSize: 14,
  },
});
