import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    useColorScheme,
    Dimensions,
    Pressable,
    View,
  } from 'react-native';
  import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit"; 
  import {useNavigation} from "@react-navigation/native"

function CoinPriceGraph({dataPie}) {
    

    return (
        <View >
        <LineChart 
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
       
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#eaeaea",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "1",
            strokeWidth: "2",
            stroke: "#000000"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
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
export default CoinPriceGraph
