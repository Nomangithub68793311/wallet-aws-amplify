import React from 'react'
import {Home,Portfolio,Market,Rankings,Profile} from '../../../types'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconMAT from 'react-native-vector-icons/MaterialCommunityIcons'
import IconMATT from 'react-native-vector-icons/AntDesign'
import IconMATTT from 'react-native-vector-icons/MaterialIcons'
import IconMATTAnt from 'react-native-vector-icons/AntDesign'

import Homescreen from '../screens/Homescreen/index'
import Porfolio from '../screens/Portfolio/index'
import MarketScreen from '../screens/MarketScreen/index'
import RankingScreen from '../screens/RankingScreen/index'
import ProfileScreen from '../screens/ProfileScreen/index'



const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
       
        <BottomTab.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
            headerStyle: {
             elevation: 0,
             shadowOpacity: 0
           }
            }} 
        
        
        >
            <BottomTab.Screen
            name="Home" 
            component={Homescreen} 
            options={{
                tabBarLabel: 'Home',
                tabBarColor:'red',
                tabBarIcon: ({color}) => (
                  <IconMAT name="shopping" color='#9D9D9D' size={20} />
                )
              }}
            
            />
             <BottomTab.Screen
            name="Portfolio" 
            component={Porfolio} 
            options={{
                tabBarLabel: 'Portfolio',
                tabBarColor:'red',
                tabBarIcon: ({color}) => (
                  <IconMAT name="chart-pie" color='#9D9D9D' size={20} />
                )
              }}
            
            />
             <BottomTab.Screen
            name="Market" 
            component={MarketScreen} 
            
            options={{
                tabBarLabel: 'Market',
                tabBarColor:'red',
                tabBarIcon: ({color}) => (
                  <IconMAT name="chart-line" color='#9D9D9D' size={20} />
                )
              }}
            />
             <BottomTab.Screen
            name="Rankings" 
            component={RankingScreen} 
            
            options={{
                tabBarLabel: 'Rankings',
                tabBarColor:'red',
                tabBarIcon: ({color}) => (
                  <IconMATTT name="leaderboard" color='#9D9D9D' size={20} />
                )
              }}
            />
             <BottomTab.Screen
            name="Profile" 
            component={ProfileScreen} 
            
            options={{
                tabBarLabel: 'Profile',
                tabBarColor:'red',
                tabBarIcon: ({color}) => (
                  <IconMATTAnt name="user" color='#9D9D9D' size={20} />
                )
              }}
            />

            
        </BottomTab.Navigator>
        
    )
}

export default BottomTabNavigator
