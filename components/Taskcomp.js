import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, Paragraph } from 'react-native-paper';
import { CheckBox } from '@rneui/themed';
import { Dimensions } from 'react-native';
import axios from 'axios';
import { Url, getToken } from './config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height}= Dimensions.get('screen')

const Taskcomp = (props) => {
    const {tid,taskText,isComplete,did}=props;
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
    <View style={{ alignItems: "center" }}>
      <Card
            style={{
              margin: 10,
              
              backgroundColor: "#dbe4c6",
              width: width * 0.8,
              
            }}
          >
            <Card.Title
              title={tid}
              right={() => (
                <CheckBox
                  iconRight
                  containerStyle={{
                    backgroundColor: "#dbe4c6",
                    borderWidth: 0,
                    //borderColor:'black',
                    backfaceVisibility: "hidden",
                    padding: 8,
                    borderRadius: 0,
                  }}
                  center
                  // title=""
                  checked={isChecked}
                  onPress={oncheckhandle}
                  textStyle={{ fontSize: 15 }}
                />
              )}
            />
            <Card.Content>
              <Paragraph>{taskText}</Paragraph>
            </Card.Content>
          </Card>
          
     

     
    </View>
  </View>
  )
}

export default Taskcomp;

const styles = StyleSheet.create({})