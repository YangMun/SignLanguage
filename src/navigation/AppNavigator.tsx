import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

import MainView from '../mainPage/mainView';
import StudyPage from '../studyPage/StudyPage';
import QuizPage from '../quizPage/QuizPage';
import TranslatePage from '../translatePage/TranslatePage';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={MainView} />
        <Stack.Screen name="Study" component={StudyPage} />
        <Stack.Screen name="Quiz" component={QuizPage} />
        <Stack.Screen name="Translate" component={TranslatePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
