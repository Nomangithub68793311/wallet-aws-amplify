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
function Profile({data}) {
    const{id,name,symbol,amount,valueUSD,image}=data
    console.log("yes", image)
    return (
        
        <View style={styles.root}>
            
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
                
            </View>
        </View>
       
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
     marginTop:10,
    
 },
 first:{
flexDirection:'column',
marginTop:15,
marginLeft:-50

 },
 under:{
     marginTop:20
 },
 rank:{
    marginTop:25
}
 
});
export default Profile
