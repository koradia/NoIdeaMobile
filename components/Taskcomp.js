import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, Paragraph, Checkbox } from 'react-native-paper';
import { CheckBox } from '@rneui/themed';
import { Dimensions } from 'react-native';
import axios from 'axios';
import { Url, getToken } from './config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height}= Dimensions.get('screen')

const Taskcomp = (props) => {
    const {tid,index,taskText,isComplete,did}=props;
    const [isChecked,setIsChecked]=useState(isComplete);
    const oncheckhandle=async ()=>{
        const token = await getToken();
        const pid = await AsyncStorage.getItem('PID');
        if(isChecked){
            setIsChecked(false);
            const res= await axios.post(Url +"/set/taskincomplete",
            {
                pid,
                tid,
                did

            },{headers:{
                "Authorization": token,
              }}
              ).catch((e)=>console.log(e));
              console.log(res.data);

        }
        else{
            setIsChecked(true);
            const res= await axios.post(Url +"/set/taskcomplete",
            {
                pid,
                tid,
                did

            },{headers:{
                "Authorization": token,
              }}
              ).catch((e)=>console.log(e));
              console.log(res.data);
        }

    }

  return (
    <View>
   
    
    <View style={{marginTop:20, marginLeft:40, marginRight:40, borderWidth:1, padding:20,  borderRadius:20, flexDirection:'row', backgroundColor:'#e7f0f9'}}>
      <View><Image source={require('../images/target.png')}  style={{width:35, height:35}}/></View>
      <View><Text style={{color:'#112b48', marginTop:10, width:200, fontSize:13}}> {taskText}</Text></View>
      <View style={{borderWidth:0}}>
      <Checkbox
                        status={isChecked ? "checked" : "unchecked"}
                        onPress={oncheckhandle}
                        
                      />
      </View>
    </View>
  </View>
  )
}

export default Taskcomp;

const styles = StyleSheet.create({})