import { Linking, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Url, getToken } from './config';
import axios from 'axios';

const Browsecomp = (props) => {

    const {tid, text, vid, isComplete, tasklink, did}= props;

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
    <View style={{marginTop:20, marginLeft:40, marginRight:40, borderWidth:1, padding:20,  borderRadius:20, flexDirection:'row', flex:1, backgroundColor:'#E4D0D0'}}>
      <View><Text style={{color:'#594545', marginTop:5, width:230}} onPress={() => Linking.openURL(tasklink)}>{text}</Text></View>
      <View style={{}}>
      <Checkbox
                        status={isChecked ? "checked" : "unchecked"}
                        onPress={oncheckhandle}
                        
                      />
      </View>
    </View>
  )
}

export default Browsecomp

const styles = StyleSheet.create({})