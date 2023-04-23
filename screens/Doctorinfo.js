import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Appbartab from "../components/Appbartab";
import Bottombar from "../components/Bottombar";
import { Dimensions } from "react-native";
import { Button } from "react-native-paper";
import axios from "axios";
import { Url, getToken } from "../components/config";

const { width, height } = Dimensions.get("screen");
const Doctorinfo = ({navigation}) => {

  const [name, setName]= useState();
  const [expr, setExpr]= useState();
  const [lic, setLic]= useState();
  const [qual, setQual]= useState();


  useEffect(()=>{
   
    const oneffect=async()=>{
      const token= await getToken();
      const result= await axios.post(Url + "/assdoctor" ,
      {}, {headers: {
        Authorization: token,
      },
    }).catch((e)=>console.log(e));
    console.log(result.data);
    setName(result.data.name);
    setExpr(result.data.qual);
    setLic(result.data.lic);
    setQual(result.data.specs);
    }
    oneffect();
  },[])


  return (
    <View>
      <Appbartab />
      <View
        style={{
          margin: 30,
          borderWidth: 0,
          width: width * 0.85,
          height: height * 0.23,
          flexDirection: "row",
          backgroundColor: "#BCEAD5",
          borderRadius: 20,
        }}
      >
        <View style={{ margin: 0, borderWidth: 0, width: 100 }}>
          <Image
            style={{ width: 110, height: 110, marginTop: 10 }}
            source={require("../images/doctor.png")}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            marginBottom: 10,
            borderWidth: 0,
            width: 220,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 20, height: 20, marginTop: 10, marginLeft: 10 }}
              source={require("../images/name1.png")}
            />
            <Text style={{ margin: 10, marginTop: 5 }}>{name}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 20, height: 20, marginTop: 10, marginLeft: 10 }}
              source={require("../images/qualification.png")}
            />
            <Text style={{ margin: 10, marginTop: 5 }}>{qual}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 20, height: 20, marginTop: 10, marginLeft: 10 }}
              source={require("../images/experience.png")}
            />
            <Text style={{ margin: 10, marginTop: 8 }}>{expr}</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 20, height: 20, marginTop: 10, marginLeft: 10 }}
              source={require("../images/license.png")}
            />

            <Text style={{ margin: 10, marginTop: 8 }}>
              Lic No- {lic}
            </Text>
          </View>
        </View>
      </View>
      <View style={{margin:50}}>
        <Button
          icon="chat"
          mode="elevated"
          onPress={() => navigation.navigate('Chatscrn')}
        >
          Chat with Doctor
        </Button>
      </View>
      <View style={{marginTop:310}}>
        <Bottombar />
      </View>
    </View>
  );
};

export default Doctorinfo;

const styles = StyleSheet.create({});
