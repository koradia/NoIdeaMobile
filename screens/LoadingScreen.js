import {ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native-paper";

const { width, height } = Dimensions.get("screen");

const LoadingScreen = ({ navigation }) => {
  const [loggedin, setLoggedin] = useState(false);

  const img3 = { uri: "https://i.ibb.co/WvcQTtK/imgbg.jpg" };


  useEffect(() => {
    const onhandlestart = async () => {
      const res = await AsyncStorage.getItem("JWT");

      if (res != null) {
        console.log("asads");
        console.log(res);
        //api cl=sll to validate
        setLoggedin(true);
        navigation.navigate('Dashboard');
      } 
      else {
        // if (!loggedin) {
          //this taken form startscrn
          const checkIfAlreadyLaunched = async ()=>{
            const res = await AsyncStorage.getItem('alreadyLaunched');
            console.log(res);
            if(res=='true'){
              navigation.navigate('LoginScreen');
            }
            else{
              navigation.navigate('Startscrn')
            }
          }
          checkIfAlreadyLaunched();
          //ended scrn

          console.log("heelo");
          //navigation.navigate("Startscrn");
        // }
        // else navigation.navigate('LoginScreen');
      }
    };
    onhandlestart();
    //if(loggedin==false) navigation.navigate('Login');
  },[]);

  return (
    <View style={{ height: height, width: width, }}>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            //padding: 10,
            width: width,
            height: height,
          }}
        >
          <ImageBackground
            source={img3}
            resizeMode="cover"
            style={{ flex: 1, justifyContent: "center" }}
            imageStyle={{
              width: width,
              // opacity: 0.25,
              height: height,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "monospace",
                fontSize: 30,
                padding: 10,
                textAlign: "center",
                color: "black",
                fontWeight: "400",
                fontStyle: "italic",
              }}
            >
             Loading       <ActivityIndicator animating={true} color={'purple'} />
 </Text>
             
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({});
