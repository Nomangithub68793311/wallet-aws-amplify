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
  const image=require("../../../assets/images/Saly-17.png");
  import MarketCoin from '../../components/MarketCoin/index'
  const api_get="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

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
    },
    
    {
       id:"4",
       name:"Etherium",
       symbol:"ETH",
       image:"https://assets.coingecko.com/coins/images/12171/large/aJGBjJFU_400x400.jpg?1597804776",
       amount:1.12,
       valueUSD:69.420
    },{
     id:"4",
     name:"Etherium",
     symbol:"ETH",
     image:"https://assets.coingecko.com/coins/images/12171/large/aJGBjJFU_400x400.jpg?1597804776",
     amount:1.12,
     valueUSD:69.420
   },
   {
     id:"4",
     name:"Etherium",
     symbol:"ETH",
     image:"https://assets.coingecko.com/coins/images/12171/large/aJGBjJFU_400x400.jpg?1597804776",
     amount:1.12,
     valueUSD:69.420
   },
   {
     id:"4",
     name:"Etherium",
     symbol:"ETH",
     image:"https://assets.coingecko.com/coins/images/12171/large/aJGBjJFU_400x400.jpg?1597804776",
     amount:1.12,
     valueUSD:69.420
   },{
     id:"4",
     name:"Etherium",
     symbol:"ETH",
     image:"https://assets.coingecko.com/coins/images/12171/large/aJGBjJFU_400x400.jpg?1597804776",
     amount:1.12,
     valueUSD:69.420
   },
   {
     id:"4",
     name:"Etherium",
     symbol:"ETH",
     image:"https://assets.coingecko.com/coins/images/12171/large/aJGBjJFU_400x400.jpg?1597804776",
     amount:1.12,
     valueUSD:69.420
   }
   ,{
     id:"4",
     name:"Etherium",
     symbol:"ETH",
     image:"https://assets.coingecko.com/coins/images/12171/large/aJGBjJFU_400x400.jpg?1597804776",
     amount:1.12,
     valueUSD:69.420
   },
   {
     id:"4",
     name:"Etherium",
     symbol:"ETH",
     image:"https://assets.coingecko.com/coins/images/12171/large/aJGBjJFU_400x400.jpg?1597804776",
     amount:1.12,
     valueUSD:69.420
   }, {
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
   }, {
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
   }, {
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
   },
   
   
     ]
function MarketScreen() {
    return (
        <View >
        <View style={{alignItems:'center',marginTop:50}}>
        <Image style={{alignSelf:'center'}} source={image} />
        </View>
        <View style={{alignSelf:'center',marginTop:5,}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Market
       
        </Text>
        </View>
        <ScrollView>
        {CoinPortfolio.map((item)=>{
          return <MarketCoin Key={item.id}data={item}/>
        })}
         </ScrollView>
        
      

        
        
        </View>
    )
}

export default MarketScreen
