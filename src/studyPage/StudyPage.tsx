import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Video, ResizeMode } from 'expo-av';
import { videoAssets, videoMap } from './data/videoAssets';

const categories = [
  { id: '1', title: '가족', icon: 'users' },
  { id: '2', title: '날씨', icon: 'cloud-sun' },
  { id: '3', title: '시간', icon: 'clock' },
  { id: '4', title: '인사', icon: 'hand-paper' },
  { id: '5', title: '장소', icon: 'map-marker-alt' },
  { id: '6', title: '초대', icon: 'envelope-open-text' }
];

export default function StudyPage() {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const videoRef = useRef(null);
  const [_ , setStatus] = useState({});

  // 선택된 카테고리에 따른 비디오 목록
  const getVideoList = (category: string) => {
    return videoMap[category] || [];
  };

  // 1920 x 1080 비율 계산 (16:9)
  const screenWidth = Dimensions.get('window').width;
  const aspectRatio = 1080 / 1920; // 실제 영상 비율
  const videoHeight = screenWidth * aspectRatio;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <FontAwesome5 name="chevron-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>수화 학습</Text>
      </View>

      <View style={styles.content}>
        {/* 상단 비디오 영역 */}
        <View style={[styles.videoSection, { height: videoHeight }]}>
          <View style={styles.videoContainer}>
            {selectedVideo ? (
              <Video
                ref={videoRef}
                source={selectedCategory && selectedVideo ? videoAssets[selectedCategory][selectedVideo] : null}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode={ResizeMode.CONTAIN}
                shouldPlay
                isLooping
                style={[styles.video, { width: screenWidth, height: videoHeight }]}
                useNativeControls
                onPlaybackStatusUpdate={status => setStatus(() => status)}
              />
            ) : (
              <View style={[styles.placeholderContainer, { height: videoHeight }]}>
                <FontAwesome5 name="play-circle" size={50} color="#666" />
                <Text style={styles.placeholderText}>학습할 수화를 선택해주세요</Text>
              </View>
            )}
          </View>
        </View>

        {/* 하단 선택 영역 */}
        <View style={styles.selectionSection}>
          <View style={styles.categorySection}>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false} 
              style={styles.categoryScroll}
            >
              {categories.map((category) => (
                <TouchableOpacity
                  key={category.id}
                  style={[
                    styles.categoryCard,
                    selectedCategory === category.title && styles.selectedCard
                  ]}
                  onPress={() => setSelectedCategory(category.title)}
                >
                  <FontAwesome5 
                    name={category.icon} 
                    size={24} 
                    color={selectedCategory === category.title ? "#4A90E2" : "#666"} 
                  />
                  <Text style={[
                    styles.categoryTitle,
                    selectedCategory === category.title && styles.selectedCategoryTitle
                  ]}>
                    {category.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.videoListSection}>
            <ScrollView style={styles.videoListScroll}>
              {selectedCategory ? (
                getVideoList(selectedCategory).map((video) => (
                  <TouchableOpacity
                    key={video}
                    style={[
                      styles.videoCard,
                      selectedVideo === video && styles.selectedVideoCard
                    ]}
                    onPress={() => setSelectedVideo(video)}
                  >
                    <FontAwesome5 
                      name="play-circle" 
                      size={24} 
                      color={selectedVideo === video ? "#4A90E2" : "#666"} 
                    />
                    <Text style={[
                      styles.videoCardTitle,
                      selectedVideo === video && styles.selectedVideoCardTitle
                    ]}>
                      {video}
                    </Text>
                  </TouchableOpacity>
                ))
              ) : (
                <View style={styles.noSelectionContainer}>
                  <Text style={styles.noSelectionText}>카테고리를 선택해주세요</Text>
                </View>
              )}
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 60 : 30,
    paddingHorizontal: 20,
    paddingBottom: 15,
    backgroundColor: '#4A90E2',
    height: Platform.OS === 'ios' ? 100 : 80,
  },
  backButton: {
    marginRight: 15,
    padding: 5,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
  },
  videoSection: {
    backgroundColor: '#000',
    width: '100%',
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  video: {
    backgroundColor: '#000',
  },
  selectionSection: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categorySection: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  categoryScroll: {
    flexGrow: 0,
  },
  categoryCard: {
    width: 100,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
  selectedCard: {
    backgroundColor: '#F0F8FF',
    borderColor: '#4A90E2',
  },
  categoryTitle: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  selectedCategoryTitle: {
    color: '#4A90E2',
    fontWeight: 'bold',
  },
  videoListSection: {
    flex: 1,
    padding: 15,
  },
  videoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  selectedVideoCard: {
    backgroundColor: '#F0F8FF',
    borderColor: '#4A90E2',
  },
  videoCardTitle: {
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
  selectedVideoCardTitle: {
    color: '#4A90E2',
    fontWeight: 'bold',
  },
  placeholderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    marginTop: 15,
    color: '#666',
    fontSize: 16,
  },
  noSelectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  noSelectionText: {
    color: '#666',
    fontSize: 16,
  },
  videoListScroll: {
    flex: 1,
  },
});

