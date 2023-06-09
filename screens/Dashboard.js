import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  ScrollView,
  Alert,
  
} from "react-native";
import React, { useEffect, useState } from "react";

import { Dimensions } from "react-native";
import Appbartab from "../components/Appbartab";
import Bottombar from "../components/Bottombar";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Assessyourself from "../components/Assessyourself";
import Blogspot from "../components/Blogspot";
import Iconsall from "../components/Iconsall";
import Journal from "../components/Journal";
import Therapy from "../components/Therapy";
import { Url, getToken } from "../components/config";
import axios from "axios";
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const { width, height } = Dimensions.get("screen");




const Dashboard = ({ navigation }) => {
 
  const [loggedin, setLoggedin] = useState(false);

  const [prog1, setProg1] = useState(0);

    const [prog2, setProg2] = useState(0);

    const [prog3, setProg3]= useState(0);

  

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const token = await getToken();
        const pid= await AsyncStorage.getItem('PID');
        console.log(pid)
        const res = await axios.post(Url+"/patget/status/"+pid,
        {}, {headers: {
          Authorization: token,
        },
        }
        
        );
        console.log(res.data[0].assig);
        let p1= Math.round((res.data[0].compl*100)/(res.data[0].assig))
        let p2= Math.round((res.data[1].compl*100)/(res.data[1].assig))
        let p3= Math.round((res.data[2].compl*100)/(res.data[2].assig))

        setProg1(p1)
        setProg2(p2)
        setProg3(p3)
        console.log(prog2);
        console.log(prog3);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },)

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to Exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, );

  const arr=["1"];

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Appbartab />
      </View>

      <ScrollView contentContainerStyle={{ backgroundColor: "#ffffff" }}>
        <Iconsall prog1={prog1} prog2={prog2} prog3={prog3} />
        <View>
          <Assessyourself />
        </View>
        <View>
          <Blogspot />
        </View>

        <View>
          <Text
            style={{
              marginLeft: 18,
              marginTop: 20,
              fontSize: 20,
              // fontWeight: "bold",
            }}
          >
            Therapy & Phychiatry
          </Text>
        </View>

        <View>
          <Therapy />
        </View>

        <View>
          <Text
            style={{
              marginLeft: 18,
              marginTop: 20,
              fontSize: 20,
              // fontWeight: "bold",
            }}
          >
            Your Journal
          </Text>
          <Journal />
        </View>
      </ScrollView>

      <View>
        <Bottombar />
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  cont: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#D8D8D8",
    height: height,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
    marginTop: 50,
    backgroundColor: "#FFEAEA",
    height: height * 0.8,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#D8D8D8",
    height: height,
  },
  title: {
    textAlign: "left",
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
    fontFamily: "Kufam-SemiBoldItalic",
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
  statusBar: {
    backgroundColor: "#3343BD",
  },
  navBar: {
    backgroundColor: "#fff",
  },
  navtitle: {
    color: "#E7259C",
  },
  buttonText: {
    color: "rgba(231, 37, 156, 0.5)",
  },
  navGroup: {
    justifyContent: "flex-end",
  },
  navButton1: {
    flex: 1,
  },
  image: {
    width: 30,
  },
  viewBox: {
    paddingHorizontal: 20,
    justifyContent: "center",
    width: width,
    padding: 10,
    alignItems: "center",
    height: 150,
  },
  slider: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  dotContainer: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 15,
  },
});
