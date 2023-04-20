import { View, Text, ScrollView } from "react-native";
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
const { width, height } = Dimensions.get("screen");
const Taskmanager = ({ navigation }) => {
 
  const [taskList,setTaskList]=useState([]);

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

  const right = () => <Text>wert-</Text>;

  const arr = [
    ["t1w", "soqwertyu", "false"],
    ["t2", "some", "true"],
    ["t1", "so", "false"],
    ["t1", "so", "true"],
    ["t1", "so", "false"],
    ["t1", "so", "true"],
  ];

  

  return (
    <View style={{ flex: 1 }}>
      <Appbartab />
      <View>
        <Text style={styles.title}>
          {"\n"}Daily Goals{"\n"}
        </Text>
      </View>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          {taskList.map((ele,index) => (
            <Taskcomp tid={ele.assignedTask.tid} taskText={ele.tasktext} isComplete={ele.assignedTask.complete} did={ele.assignedTask.did} />
      
            
          ))}
          <Text>{"\n"}</Text>
        </View>
      </ScrollView>
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
