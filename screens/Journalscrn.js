import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Appbartab from "../components/Appbartab";
import FormInput from "../components/FormInput";
import { Button, Card, Paragraph, TextInput } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Dimensions } from "react-native";
import Noteslist from "../components/Noteslist";
import Bottombar from "../components/Bottombar";
import axios from "axios";
import { Url, getToken } from "../components/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const{width,height} =Dimensions.get('screen');

const Journalscrn = ({navigation}) => {

   

    const [text,setText] =useState('');
    const [notelist, setNotelist]= useState([]);

    const onaddhandle=async(e)=>{
        if(text=='') alert('please write something to add')
        else {
            e.preventDefault();
            const token= await getToken();
            const pid = await AsyncStorage.getItem('PID');
            const result= await axios.post(Url + "/journal/save" ,
            {
              pid:pid,
              journaltext:text
            },{headers:{
              "Authorization": token,
            }}
            ).catch((e)=>console.log(e))
            // addto 
            setText("");
            navigation.navigate('Journalscrn');
            console.log('added');
        }
        
    }

    useEffect(()=>{
      const onscreen=async(e)=>{
        const token =await getToken();
        try{
          const res= await axios.post(Url + "/get/alljournal",
          {},{headers:{
            "Authorization": token,
          }}
          )
          //console.log(res.data);
          setNotelist(res.data);
          //console.log(notelist);

        }
        catch(e){
          //console.log(e);
        }

      }
      onscreen();
    },)

  return (
    <View style={{flex:1}}>
      <View>
        <Appbartab />
      </View>
      <View>
        <Text
          style={{
            textAlign: "center",
            padding: 20,
            fontFamily: "serif",
            fontSize: 25,
          }}
        >
          Sticky Notes
        </Text>
      </View>

      
      <View style={{alignItems:'center', }}>
        <TextInput
          style={{ padding:10, width:340 }}
          //label="Add it here"
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          placeholder="Add it here"
          value={text}
          onChangeText={(text) => setText(text)}
        /></View>

        <View style={{alignItems:'flex-end', marginRight:20}}>
        <Button
          icon="plus"
          mode="contained"
          style={{ margin: 10, width:110 }}
          onPress={onaddhandle}
        >
          Add
        </Button></View>
     
        <ScrollView>
        <View style={{ alignItems: "center" }}>
          {notelist.map((ele) => (
            <Noteslist date={ele.filledwhen} text={ele.journaltext} />
            
          ))}
          <Text>{"\n"}</Text>
        </View>
      </ScrollView>
      <View style={{}} >
      <Bottombar />
      </View> 
    </View>
  );
};

export default Journalscrn;

const styles = StyleSheet.create({});
