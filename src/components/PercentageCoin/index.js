import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    Image,
    View,
  } from 'react-native';
function PercentageCoin({data}) {
    return (
       <Text style={{color:data>0?"#398f0a":"#f10000"}}>
{data>0 && "+"}{data}
       </Text>
    )
}

export default PercentageCoin
