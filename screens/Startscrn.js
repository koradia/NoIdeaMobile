import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { FlatList, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import { ImageBackground } from 'react-native'
import { Dimensions } from 'react-native'
import { Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage'


//const img3 = { uri: "https://i.ibb.co/WvcQTtK/imgbg.jpg" };

const{width, height}=Dimensions.get('screen')

const Startscrn = ({navigation}) => {

  // useEffect(()=>{
  //   const checkIfAlreadyLaunched = async ()=>{
  //     const res = await AsyncStorage.getItem('alreadyLaunched');
  //     console.log(res);
  //     if(res==='true'){
  //       navigation.navigate('LoginScreen');
  //     }
  //   }
  //   checkIfAlreadyLaunched();
  // })
  return (
//     
        <View
        style={{ flexDirection: "row",}}
       
        >
        <View
        style={{
            flex: 1,
            //padding: 10,
            width: width,
            height: height,
            
        }}
        >
        <ImageBackground
            source={require('../images/imgbg.jpg')}
            resizeMode="cover"
            style={{ flex: 1, justifyContent: "center" }}
            imageStyle={{
            width: width,
           // opacity: 0.25,
           height:height,
            borderRadius: 5,
            }}
        >

            <Text style={{ fontFamily:'monospace'  ,fontSize: 22, padding: 10, textAlign:"center", color:'black', fontWeight:'400',fontStyle:'italic' }}>
            Find your safe place with Mindful Milestones Community.
           
            </Text>
            <View>
        <Image style={{width:width*.5, height:height*.23, marginLeft:85, marginTop:50,marginBottom:5 }} source={require('../images/commu.png')}  />
           </View>
           <Text style={{textAlign:'center', color:'#444444', fontSize:18, padding :20, marginLeft:10, marginRight:10, marginBottom:10 }}>Talk About your thoughtd and feeling with others who 
            have has similar experiences.
           </Text>
           <View style={{margin:50, justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Startscrn2')}>
        <AntDesign name='right' size={40} color="#402218" />
        </TouchableOpacity></View>
        </ImageBackground>
        
        </View>
        </View>
  )
}

export default Startscrn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        flex: 1,
        justifyContent: 'center',
        width:width,
        height:height
      },
      text: {
        color: 'black',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'black',
      },
})