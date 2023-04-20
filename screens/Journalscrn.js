import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Appbartab from "../components/Appbartab";
import FormInput from "../components/FormInput";
import { Button, Card, Paragraph, TextInput } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Dimensions } from "react-native";
import Noteslist from "../components/Noteslist";
import Bottombar from "../components/Bottombar";
import axios from "axios";
import { Url, getToken } from "../components/config";

const{width,height} =Dimensions.get('screen');

const Journalscrn = () => {

   

    const [text,setText] =useState('');

    const onaddhandle=async(e)=>{
        if(text=='') alert('please write something to add')
        else {
            e.preventDefault();
            const token= await getToken();
            const result= await axios.post(Url + "/journal/save" ,
            {
              text
            },{headers:{
              "Authorization": token,
            }}
            
            ).catch((e)=>console.log(e))
            // addto 
            console.log('added');
        }
        
    }

  return (
    <View style={{height:height}}>
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
          Journal Notes
        </Text>
      </View>
      <View style={{ borderWidth: 0, flexDirection: "row", margin: 20 }}>
        <TextInput
          style={{ width: 220, height: 40, margin: 10, borderWidth: 1 }}
          //label="Add it here"
          placeholder="Add it here"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Button
          icon="plus"
          mode="contained"
          style={{ margin: 10 }}
          onPress={onaddhandle}
        >
          Add
        </Button>
      </View>
      <Noteslist />
      <View style={{marginTop:160}} >
      <Bottombar /></View> 
    </View>
  );
};

export default Journalscrn;

const styles = StyleSheet.create({});
