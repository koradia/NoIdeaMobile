import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Appbartab from '../components/Appbartab';
import Bottombar from '../components/Bottombar';
import Browsecomp from '../components/Browsecomp';
import { Url, getToken } from '../components/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Browse = () => {

        const[articlelist, setArticlelist]= useState([]);

    useEffect(() => {
        const fetchData= async()=>{
          
          const token = await getToken();
          const pid = await AsyncStorage.getItem('PID');
          const res = await axios.post(Url + "/get/assigned/tasks/"+pid, 
          {},{headers:{
            "Authorization": token,
          }}
          ).catch((e)=>console.log(e));
          
          setArticlelist(res.data);  
          console.log(articlelist);
        }
        fetchData();
      },[]);

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View>
        <Appbartab />
      </View>
      
      <Text style={{textAlign:'center',padding:20, fontSize:20, fontWeight:'600', color:'maroon'}}>Some Fun Things to Read</Text>
      <ScrollView>
           
            { articlelist.map((ele,index) => (
            
            ele.tasktype===3 ? <Browsecomp tid={ele.assignedTask.tid} text={ele.tasktext} vid={ele.tasklink} isComplete={ele.assignedTask.complete} tasklink={ele.tasklink} did={ele.assignedTask.did} /> : <View></View>
          
          // <Videocomp vid={ele.tasklink} />
          
        ))}
           
           </ScrollView>
      <View style={{}}>
        <Bottombar />
      </View>
    </View>
  )
}

export default Browse;

const styles = StyleSheet.create({})