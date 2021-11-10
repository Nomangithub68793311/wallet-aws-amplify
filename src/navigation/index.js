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
import BottomTabNavigator from './BottomTabNavigator'
import CoinDetailsScreen from '../screens/CoinDetailsScreen/index'
import CoinExchangeScreen from '../screens/CoinExchangeScreen/index'
import WelcomeScreen from '../screens/WelcomeScreen/index'
import IconIco from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Navigation=()=>{



    return(

<NavigationContainer
   
   >
     <Stack.Navigator
      screenOptions={{
       headerShown: false,
       headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      }
       }} >
           <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator}/>

                               <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>



        

                 <Stack.Screen name="CoinExchangeScreen" 
                 options={{
                   headerShown: true,
                   headerTitle:"price Data",
                   headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0
                  }
                   }} 
                 component={CoinExchangeScreen}/>


       <Stack.Screen name="CoinDetailsScreen" 
      options={{
         headerShown: true,
         headerTitle:"price Data",
         headerStyle: {
          elevation: 0,
          shadowOpacity: 0
        }
         }} 
       component={CoinDetailsScreen}/>
     </Stack.Navigator>

   </NavigationContainer>
   

    )
}

export default Navigation;
