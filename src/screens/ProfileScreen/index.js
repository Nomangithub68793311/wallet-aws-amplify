import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    useColorScheme,
    TouchableOpacity,
    Pressable,
    View,
  } from 'react-native';
  const image=require("../../../assets/images/Saly-16.png");
import Profile from '../../components/Profile/index'
const CoinPortfolio=
    {
   id:"1",
   name:"Rana",
   symbol:"rana.buddy@gmail.com",
   image:"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
   amount:1.12,
   valueUSD:69145
    }
function ProfileScreen() {
    const pressClick =()=>{
        console.log("yesß")
    }
    return (
        <View >
        <View style={{alignItems:'center',marginTop:50}}>
        <Image style={{alignSelf:'center'}} source={image} />
        </View>
        
        
        <Profile data={CoinPortfolio}/>
        
      
  <TouchableOpacity  onPress={pressClick} style={{justifyContent:'center',alignItems:'center',marginTop:400}}>
   <Text>
       Sign out
   </Text>
  </TouchableOpacity>
        
        
        </View>
    )
}

export default ProfileScreen
