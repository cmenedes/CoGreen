import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { StyleSheet, Text, View } from 'react-native';

//import screens
import OnboardScreen from './src/views/OnboardScreen';
import DashboardScreen from './src/views/DashboardScreen';
import QuestScreen from './src/views/QuestScreen';
import QuestDetailScreen from './src/views/QuestDetailScreen';
import RewardsScreen from './src/views/RewardsScreen';



const AppNavigator = createStackNavigator({
  Onboard: {
    screen: OnboardScreen
  },
  Dashboard: {
    screen: DashboardScreen
  },
  Quests: {
    screen: QuestScreen
  },
  QuestDetail: {
    screen: QuestDetailScreen
  },
  Rewards: {
    screen: RewardsScreen
  }  
});

const AppContainer = createAppContainer(AppNavigator);


export default AppContainer;

 