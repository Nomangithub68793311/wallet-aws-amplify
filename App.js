/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator'
import CoinDetailsScreen from './src/screens/CoinDetailsScreen/index'
import CoinExchangeScreen from './src/screens/CoinExchangeScreen/index'
import Navigation from './src/navigation/index'
import IconIco from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
 

  return (
    <Navigation/>
  );
};

const styles = StyleSheet.create({
 
 
});

export default App;
