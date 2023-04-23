import { StyleSheet, Text, View, TouchableOpacity,Image, ImageBackground } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Url, getToken } from './config';

const{width,height}=Dimensions.get('screen');

const Therapy = () => {


  const ondoctorhandle=async(e)=>{
    e.preventDefault();
    const token= await getToken();
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
    
    console.log(nav.data.score);
    if(nav.data.score!=null) navigation.navigate('Doctorinfo');
    else navigation.navigate('Questionnaire')

  }

    const navigation=useNavigation('Doctorinfo');
  return (
    <View
    style={{
      borderWidth: 0,
      borderRadius: 20,
      margin: 20,
      backgroundColor: "#EAE0DA",
    }}
  >
    <View
      style={{
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 60,
        marginRight: 60,
        marginBottom: 10,
      }}
    >
      <TouchableOpacity onPress={()=>navigation.navigate('Chatscrn')}>
        <Image
          style={{
            width: width * 0.22,
            height: height * 0.1,

            marginTop: 20,
            marginBottom: 20,
          }}
          source={require("../images/chat.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={ondoctorhandle}>
        <Image
          style={{
            width: width * 0.22,
            height: height * 0.1,
            marginLeft: 85,
            marginTop: 20,
          }}
          source={require("../images/stethoscope.png")}
        />
      </TouchableOpacity>
    </View>

    <View
      style={{
        flexDirection: "row",
        marginBottom: 20,
        justifyContent: "space-between",
        marginLeft: 20,
        marginRight: 20,
      }}
    >
      <Text style={{ fontWeight: "700", fontSize: 16 }}>
        Chat with Doctor
      </Text>
      <Text style={{ fontWeight: "700", fontSize: 16 }}>Your Doctor</Text>
    </View>
  </View>
  )
}

export default Therapy;

const styles = StyleSheet.create({})