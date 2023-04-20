import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { Appbar } from 'react-native-paper'
import { Dimensions } from 'react-native'
import { Image } from 'react-native';

import  Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import { Url, getToken } from './config';
import axios from 'axios';
const {width,height}=Dimensions.get('screen');


const Appbartab = () => {
  const [name,setName]=useState();

  useEffect(()=>{
    const rendername = async() => {
      
      const token= await getToken();
      console.log(token);
      const nav = await axios.post(
        Url + "/patget/detail",
        {},
        {headers: {
            Authorization: token,
          },
        }
      ).catch((e)=>{
        console.log(e);

      })
      console.log(nav.data);
      setName(nav.data.name)
    }
    rendername();

  })
  return (
    
     
   <View style={{marginTop:25}}>
   <View
      style={{
        flexDirection: "row",
        width:width,
        padding:5,
        //justifyContent: "space-between",
       
        backgroundColor:'#222831',
        
        paddingTop:10,
        paddingBottom:10,
        height:height*.065,
      }}
    >
       <Image  style={{
            marginLeft:10,
            marginRight:20,
            width: 40,
            height: 40,
            borderRadius: 2,
            marginTop: 0,
          }}
              //resizeMode={"contain"}
              source={require('../images/logoori.png')}
            />
            <Text style={styles.text}>Hello {name}</Text>
            <TouchableOpacity onPress={() => {}}>

      <Ionicons
          name='md-notifications-outline'
          size={25}
          color="white"
          
          style={{marginLeft:width*.34, marginTop:5, marginRight:20 }}
        />
        </TouchableOpacity>
            
            
    </View>
    </View>
//     <View style={{}} >
//     <Appbar.Header style={styles.container}>
//     {/* <Appbar.BackAction /> */}
//     <Image  style={{
//             marginLeft:20,
//             marginRight:20,
//             width: 40,
//             height: 40,
//             borderRadius: 2,
//             marginTop: 0,
//           }}
//               //resizeMode={"contain"}
//               source={require('../images/logoori.png')}
//             />
//     <Appbar.Content style={styles.text} titleStyle={styles.text} title='Hello Krutik,'></Appbar.Content>
//     {/* <TouchableOpacity>
//     <Appbar.Action icon="notification-clear-all" size={30} color='white' />
//     </TouchableOpacity> */}
// </Appbar.Header>
// </View>



  )
}

export default Appbartab;

const styles = StyleSheet.create({
    container: {
        fontFamily:'Roboto',
        backgroundColor:'#222831',
        //height:height*.06,

        
      },
      text:{
        paddingTop:5,
        fontFamily:'sans-serif-thin',
        fontStyle:'italic',
        fontSize:17,
        color:'white'
      }

})