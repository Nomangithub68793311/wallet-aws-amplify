import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Pressable,
    Text,
    useColorScheme,
    Image,
    View,
  } from 'react-native';
  const image=require("../../../assets/images/Saly-1.png");
  const imagegoogle=require("../../../assets/images/google_button.png");

function WelcomeScreen() {
    const signUp =()=>{
        console.log('yes')
    }
    return (
        <View style={{flex:1,alignItems:'center',backgroundColor:'white'}}>
            <Image source={image} />
        <Text style={{fontSize:25,fontWeight:'bold'}}>Welcome To SWOPcrypto</Text>
        <Text style={{textAlign:'center',fontSize:16,color:'#3C3B3B',marginTop:20}}>Invest your virtual $100.00 and 
        {"\n"} compete with others
        </Text>
        <Pressable onPress={signUp} style={{marginTop:'auto',width:'90%'}}>
<Image style={{resizeMode:'contain',height:130,width:'100%'}} source={imagegoogle}/>
        </Pressable>

    </View>
    )
}

export default  WelcomeScreen
