import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    useColorScheme,
    Pressable,
    View,
  } from 'react-native';
  import {useNavigation} from "@react-navigation/native"

function PortfolioCoin({data}) {
    const{id,name,symbol,amount,valueUSD,image}=data
    console.log("yes", image)
    const navigation=useNavigation();

    return (
        
        <Pressable style={styles.root}onPress={()=>navigation.navigate('CoinDetailsScreen')} >  
            <View>
<Image style={styles.pic} source={{uri:image}}/>
            </View>
            <View style={styles.first}>
                <Text style={{fontWeight:'bold'}}>
{name}
                </Text>
                <Text>
                    {symbol}
                </Text>
            </View>
            <View style={styles.under}>
            <Text style={{fontWeight:'bold'}}>
${valueUSD}
                </Text>
                <Text>
                {symbol} {amount}
                </Text>
            </View>
        </Pressable>
       
    )
}
const styles = StyleSheet.create({
 root:{
flexDirection:'row',
justifyContent:'space-between',
marginHorizontal:20
 },
 pic:{
     height:50,
     width:50,
     marginTop:10
 },
 first:{
flexDirection:'column',
marginTop:15,
marginLeft:-125
 },
 under:{
     marginTop:20
 }
 
});
export default PortfolioCoin
