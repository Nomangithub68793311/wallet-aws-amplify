import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image
  } from 'react-native';
  import Ranking from '../../components/Ranking/index'
  const image=require("../../../assets/images/Saly-20.png");
  const CoinPortfolio=[
    {
   id:"1",
   name:"Bitcoin",
   symbol:"USD",
   image:"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
   amount:1.12,
   valueUSD:69.420
    },
    {
       id:"2",
       name:"Etherium",
       symbol:"ETH",
       image:"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
       amount:1.12,
       valueUSD:69.420
    },
    {
       id:"3",
       name:"Bitcoin",
       symbol:"BTC",
       image:"https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707",
       amount:1.12,
       valueUSD:69.420
    }]
function RankingScreen() {
    return (
      <View >
      <View style={{alignItems:'center',marginTop:50}}>
      <Image style={{alignSelf:'center'}} source={image} />
      </View>
      
      
      <ScrollView>
      {CoinPortfolio.map((item)=>{
        return <Ranking Key={item.id}data={item}/>
      })}
       </ScrollView>
      
    

      
      
      </View>
    )
}

export default RankingScreen
