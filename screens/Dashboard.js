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
// import { LogBox } from 'react-native';

// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications

const { width, height } = Dimensions.get("screen");




const Dashboard = ({ navigation }) => {
 
  const [loggedin, setLoggedin] = useState(false);

  // useEffect(()=>{
  //   //AsyncStorage.clear();
  //   console.log("on dash asfa");
  //   const onhandlestart=async()=>{

  //     const res= await AsyncStorage.getItem('JWT');

  //     if(res!=null){
  //       console.log("asadsdsdvergt vw weg efg etg ertd gert gf");
  //       console.log(res);
  //       //api cl=sll to validate
  //       setLoggedin(true);

  //     }
  //     else{
  //       if(!loggedin){
  //         console.log('heelo')
  //         navigation.navigate('Startscrn');
  //       }
  //     }

  //  }
  //   onhandlestart();
  //   //if(loggedin==false) navigation.navigate('Login');

  // },[])


  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
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
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Appbartab />
      </View>

      <ScrollView contentContainerStyle={{ backgroundColor: "#ffffff" }}>
        <Iconsall />
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
              fontWeight: "bold",
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
              fontWeight: "bold",
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
