import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    useColorScheme,
    View,
  } from 'react-native';
  const image=require("../../../assets/images/Saly-10.png");
  import PortfolioCoin from '../../components/PortfolioCoin/index'
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

function Porfolio() {
    return (
        <View >
        <View style={{alignSelf:'center',marginTop:50}}>
        <Image source={image} />
        </View>
        <View style={{marginTop:10,padding:30,fontSize:20}}>
        <Text style={{fontSize:20,color:'#777777'}}>Portfolio Balance
       
        </Text>
        <Text style={{fontSize:30,fontWeight:'bold'}}>
      $34.00
        </Text>
        </View>
        <ScrollView>
        {CoinPortfolio.map((item)=>{
          return <PortfolioCoin Key={item.id}data={item}/>
        })}
         </ScrollView>
        </View>
    )
}

export default Porfolio
