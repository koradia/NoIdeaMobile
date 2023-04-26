import { View, Text, ScrollView, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import {
  Button,
  Card,
  Checkbox,
  Paragraph,
  TextInput,
  Title,
} from "react-native-paper";
//import Appbar from 'react-native-paper/lib/typescript/src/components/Appbar/Appbar'
import Appbartab from "../components/Appbartab";
import { Dimensions } from "react-native";
import { CheckBox } from "@rneui/themed";
import Taskcomp from "../components/Taskcomp";
import { Url, getToken } from "../components/config";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Bottombar from "../components/Bottombar";
const { width, height } = Dimensions.get("screen");
const Taskmanager = ({ navigation }) => {
 
  const [taskList,setTaskList]=useState([]);
  // const count=0;
  useEffect(() => {
    const fetchData= async()=>{
      
      const token = await getToken();
      const pid = await AsyncStorage.getItem('PID');
      const res = await axios.post(Url + "/get/assigned/tasks/"+pid, 
      {},{headers:{
        "Authorization": token,
      }}
      ).catch((e)=>console.log(e));
      console.log(res.data);
      setTaskList(res.data);  
    }
    fetchData();
  }, []);



  

  return (
   
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
    <View>
      <Appbartab />
    </View>
    <ImageBackground
            source={require('../images/taskbg.jpg')}
            resizeMode="cover"
            style={{ flex: 1, justifyContent: "center" }}
            imageStyle={{
            width: width,
           opacity: 0.4,
           height:height,
            borderRadius: 5,
            }}
        >
    
    <Text style={{textAlign:'center',padding:20, marginBottom:30, marginTop:20,fontSize:20, fontWeight:'600', color:'#0a1b2e'}}>Daily Tasks</Text>
    <ScrollView>
    {taskList.map((ele,index) => (
           ele.tasktype==1 ? <Taskcomp tid={ele.assignedTask.tid} index={"Task"} taskText={ele.tasktext} isComplete={ele.assignedTask.complete} did={ele.assignedTask.did} /> : <View></View>
            
          ))}
           </ScrollView>
           </ImageBackground>
      <View style={{}}>
        <Bottombar />
      </View>
    </View>

  );
};

export default Taskmanager;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  pf: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 40,

    width: 300,
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
  },
  logo: {
    height: 200,
    width: 400,
    resizeMode: "cover",
    marginBottom: 20,
  },
  text: {
    fontFamily: "",
    fontSize: 20,
    marginBottom: 8,
    textAlign: "center",
    color: "#051d5f",
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  datePickerStyle: {
    width: 230,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
    fontFamily: "Lato-Regular",
  },
});
