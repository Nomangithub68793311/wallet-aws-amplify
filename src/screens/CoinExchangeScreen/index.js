import React, { useState,useEffect } from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    useColorScheme,
    TextInput,
    Dimensions,
    Pressable,
    View,
    Alert,
  } from 'react-native';
const image=require("../../../assets/images/Saly-31.png");
function CoinExchangeScreen({route}) {
    const{isBuy,coins}=route.params
    const[coin,setCoin]=useState(null)
    const[price,setPrice]=useState(null)

const maxUSD=100000;
    useEffect(()=>{
        const amount=parseFloat(coin)
        if(!amount && amount !=0){
            setCoin('')
            setPrice('')
            return;
        }
        setPrice((coin * coins.currentPrice).toString())
    },[coin])


    useEffect(()=>{
        const amount=parseFloat(price)
        if(!amount && amount !=0){
            setCoin('')
            setPrice('')
            return;
        }
        setCoin((amount / coins.currentPrice).toString())
    },[price])
    const onPlaceOrder=()=>{
        if(isBuy &&  price >maxUSD){
            Alert.alert(
                'Error', "Not enough USD Coin"
            )
            return;
        }
        if(!isBuy &&  coin >coins.amount){
            Alert.alert(
                'Error', `Not enough ${coins.symbol} coins,Max:${coins.amount}`
            )
            return;
        }
    }
    return (
       <View style={{flex:1,alignItems:'center',borderColor:'white'}}>
           <Text style={{textAlign:'center',fontWeight:'bold',fontSize:18,marginTop:20}}>
           {isBuy?"Buy":"Sell"} Bitcoin
           </Text>
           <Text style={{textAlign:'center',fontSize:12,marginTop:10}}>
           1 {coins.symbol} = ${coins.currentPrice} USD
           </Text>
           <View style={{alignItems:'center',marginTop:50}}>
        <Image style={{alignSelf:'center'}} source={image} />
        </View>
        <View style={styles.root}>
            <View style={styles.view}>
            <TextInput 
            keyboardType="numberpad"
            placeholder="0"
            style={{width:'70%'}}
            keyboardType="decimal-pad"
            value={coin}
            onChangeText={text=>setCoin(text)}
            
            
            
            
            
            />
             <Text>{coins.symbol}  </Text>
            </View>
             <Text  >
           = 
           </Text>
           <View style={styles.view}> 
           
          
            <TextInput 
            keyboardType="decimal-pad"
            style={{width:'85%'}}
           
               value={price}         
               placeholder="0"
               onChangeText={val=>setPrice(val)}
            
            
            />
            <Text>USD </Text>
             </View>
         

             
        </View>
        
        
        <Pressable onPress={onPlaceOrder} style={{height:50,width:"90%",borderRadius:30,backgroundColor:'blue',justifyContent:'center',alignItems:'center',marginTop:'auto',marginBottom:'auto'}}>
            <Text style={{color:'white',fontSize:20,textAlign:'center'}}>Place order</Text>
            </Pressable>
            
       </View>
    )
}
const styles = StyleSheet.create({
    root:{
   flexDirection:'row',
   justifyContent:'space-between',
  
   width:"100%",
   alignItems:'center'
    }

    ,view:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:"#b1b1b1",
        flex:1,
        padding:15,
        margin:20

    }

    
   });

export default CoinExchangeScreen
