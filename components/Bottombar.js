import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Appbar, FAB, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Dimensions } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginScreen from "../screens/LoginScreen";
import { useNavigation } from "@react-navigation/native";
import { NavigationAction } from "@react-navigation/native";
import Userprof from "../screens/Userprof";
import { Url, getToken } from "./config";
import axios from "axios";

const { width, height } = Dimensions.get("screen");
const BOTTOM_APPBAR_HEIGHT = height * 0.05;
const MEDIUM_FAB_HEIGHT = width;



const Bottombar = ({ LoginScreen }) => {
  const navigation = useNavigation();

  const ondoctorhandle1=async(e)=>{
    e.preventDefault();
    const token= await getToken();
    const nav = await axios.post(
      Url + "/patget/detail",
      {},
      {headers: {
          Authorization: token,
        },
      }
    ).catch((e)=>{
      console.log(e);
    })
    
    console.log(nav.data.score);
    if(nav.data.score!=null) navigation.navigate('Chatscrn');
    else{
      alert('For chat you need to fill Questionnaire first')
      navigation.navigate('Questionnaire')
    } 

  }

  return (
    //

    <View
      style={{
        flexDirection: "row",
        width: width,
        padding: 0,
        justifyContent: "space-between",
        backgroundColor: "#222831",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        height: height * 0.06,

        alignItems: "center",
        position: "relative", //Here is the trick
        bottom: 0, //Here is the trick
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "Dashboard" }],
          });
        }}
      >
        <Ionicons name="home-outline" size={25} color="white" />
      </TouchableOpacity>

      {/* <Icon icon="shopping-bag" text="" /> */}

      <TouchableOpacity
        onPress={ondoctorhandle1}
      >
        <Ionicons name="md-chatbox-ellipses-outline" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "Audioscrn" }],
          });
        }}
      >
        <Ionicons name="musical-notes-outline" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "Journalscrn" }],
          });
        }}>
        <Ionicons name="md-book-outline" size={25} color="white" />
      </TouchableOpacity>
      {/* <Icon icon="receipt" text="Orders" /> */}
      <TouchableOpacity onPress={() => navigation.navigate("Userprof")}>
        <Ionicons name="settings-outline" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Bottombar;

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: "C9D6DF",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  fab: {
    position: "absolute",
    right: 16,
  },
});
