import { View, Text, ScrollView, Image, ImageBackground } from "react-native";
import React from "react";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import { StyleSheet } from "react-native";
import FormButton from "../components/FormButton";
import { Dimensions } from "react-native";
import Appbartab from "../components/Appbartab";
import Bottombar from "../components/Bottombar";
import config, { Token, Url, getToken } from "../components/config";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import { tokens } from "react-native-paper/lib/typescript/src/styles/themes/v3/tokens";

//const[width,height]=Dimensions.get('screen');

const Questionnaire = ({ navigation }) => {
  const [v1, setv1] = useState(0);
  const [v2, setv2] = useState(0);
  const [v3, setv3] = useState(0);
  const [v4, setv4] = useState(0);
  const [v5, setv5] = useState(0);
  const [v6, setv6] = useState(0);
  const [v7, setv7] = useState(0);
  const [v8, setv8] = useState(0);

  const img3 = { uri: "https://i.ibb.co/WvcQTtK/imgbg.jpg" };

  const {width, height}= Dimensions.get('screen');

  const onsubmithandle=async(e)=>{
    // const arr=[v1,v2,v3,v4,v5,v6,v7,v8];
    e.preventDefault();
    const token= await getToken();
    console.log(token);
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
    var flag=0;
    if(nav.data.score!=null) flag=1;
    
    const res= await axios.post(Url +"/save/question",
    
      {
        questionId:{
            
            filledtime:"2023-05-08T23:13:45.733+00:00"
        },
        q1:v1,
        q2:v2,
        q3:v3,
        q4:v4,
        q5:v5,
        q6:v6,
        q7:v7,
        q8:v8
        
    
    },{headers:{
      "Authorization": token,
    }}
    
    ).catch((e)=>console.log(e))

    if(flag==1){
      navigation.navigate('Dashboard');
    } 
    else{ 
      
      const manual= await axios.post(Url + "/consult/assign", 
      {},{headers:{
        "Authorization": token,
      }}
      ).catch((e)=>console.log(e));
      console.log(manual.data);
      const value = JSON.stringify(manual.data.did);
      await AsyncStorage.setItem("DID", value);
      
      navigation.navigate('Doctorinfo');
      

  }
    
   
    

  }

  return (

    

    <View style={{height:height}}>
    <Appbartab />
    <ScrollView
      contentContainerStyle={{
        justifyContent: "center",
        //alignItems: 'center',
        //padding: 20,
        paddingTop: 10,
        //backgroundColor:'#FCFFE9',
        margin:10,
        
      }}
    >
      
       

        <Text style={{ fontSize: 25, textAlign: "center" }}>
          {" "}
          Questionnaire{"\n"}
        </Text>
        <View style={{ marginLeft: 10, marginRight: 20 }}>
                <View>
                  <View style={{ flexDirection: "row", marginRight: 10 }}>
                    <Text style={{ marginLeft: 3 }}>Q1.{"\n"}</Text>
                    <Text style={{ marginLeft: 3 }}>
                      Little interest or pleasure in doing things?
                    </Text>
                  </View>
                                <View
                                  style={{
                                    width: 150,
                                    flexDirection: "row",
                                    marginLeft: 25,
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <View style={{ width: 250, }}>
                                    <Slider
                                      step={1}
                                      minimumValue={0}
                                      maximumValue={10}
                                      value={v1}
                                      onValueChange={(slideValue) => setv1(slideValue)}
                                      minimumTrackTintColor="#8d264d"
                                      maximumTrackTintColor="#8d264d"
                                      thumbTintColor="#230a13"
                                      style={{}}
                                    />
                                  </View>
                                  <Text>
                                    {v1}%{"\n"}
                                  </Text>
                                </View>
                </View>

                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginLeft: 3 }}>Q2.{"\n"}</Text>
                    <Text style={{ marginRight: 50 }}>
                      Feeling down, depressed, or hopeless?
                    </Text>
                  </View>
                                  <View
                                    style={{
                                      width: 150,
                                      flexDirection: "row",
                                      marginLeft: 25,
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <View style={{ width: 250 }}>
                                      <Slider
                                        step={1}
                                        minimumValue={0}
                                        maximumValue={10}
                                        value={v2}
                                        onValueChange={(slideValue) => setv2(slideValue)}
                                        minimumTrackTintColor="#8d264d"
                                      maximumTrackTintColor="#8d264d"
                                      thumbTintColor="#230a13"
                                      />
                                    </View>
                                    <Text>
                                      {v2}%{"\n"}
                                    </Text>
                                  </View>
                </View>

                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginLeft: 3 }}>Q3.{"\n"}</Text>
                    <Text style={{ marginRight: 50 }}>
                      Feeling bad about yourself - or that you are a failure or have
                      let yourself or your family down?{""}
                    </Text>
                  </View>
                              <View
                                    style={{
                                      width: 150,
                                      flexDirection: "row",
                                      marginLeft: 25,
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <View style={{ width: 250 }}>
                                      <Slider
                                        step={1}
                                        minimumValue={0}
                                        maximumValue={10}
                                        value={v3}
                                        onValueChange={(slideValue) => setv3(slideValue)}
                                        minimumTrackTintColor="#8d264d"
                                        maximumTrackTintColor="#8d264d"
                                        thumbTintColor="#230a13"
                                      />
                                    </View>
                                    <Text>
                                      {v3}%{"\n"}
                                    </Text>
                                  </View>
                </View>

                              <View>
                                <View style={{ flexDirection: "row" }}>
                                  <Text style={{ marginLeft: 3 }}>Q4.{"\n"}</Text>
                                  <Text style={{ marginRight: 50 }}>
                                    Thoughts that you would be better off dead, or of hurting
                                    yourself?{""}
                                  </Text>
                                </View>
                                <View
                                  style={{
                                    width: 150,
                                    flexDirection: "row",
                                    marginLeft: 25,
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <View style={{ width: 250 }}>
                                    <Slider
                                      step={1}
                                      minimumValue={0}
                                      maximumValue={10}
                                      value={v4}
                                      onValueChange={(slideValue) => setv4(slideValue)}
                                      minimumTrackTintColor="#8d264d"
                                      maximumTrackTintColor="#8d264d"
                                      thumbTintColor="#230a13"
                                    />
                                  </View>
                                  <Text>
                                    {v4}%{"\n"}
                                  </Text>
                                </View>
                              </View>

                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginLeft: 3 }}>Q5.{"\n"}</Text>
                    <Text style={{ marginRight: 50 }}>
                      Moving or speaking so slowly that other people could have
                      noticed? Or the opposite — being so fidgety or restless that you
                      have been moving around a lot more than usual?{""}
                    </Text>
                  </View>
                                  <View
                                    style={{
                                      width: 150,
                                      flexDirection: "row",
                                      marginLeft: 25,
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <View style={{ width: 250 }}>
                                      <Slider
                                        step={1}
                                        minimumValue={0}
                                        maximumValue={10}
                                        value={v5}
                                        onValueChange={(slideValue) => setv5(slideValue)}
                                        minimumTrackTintColor="#8d264d"
                                      maximumTrackTintColor="#8d264d"
                                      thumbTintColor="#230a13"
                                      />
                                    </View>
                                    <Text>
                                      {v5}%{"\n"}
                                    </Text>
                                  </View>
                </View>

                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginLeft: 3 }}>Q6.{"\n"}</Text>
                    <Text style={{ marginRight: 50 }}>
                      Feeling tired or having little energy?{""}
                    </Text>
                  </View>
                                  <View
                                    style={{
                                      width: 150,
                                      flexDirection: "row",
                                      marginLeft: 25,
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <View style={{ width: 250 }}>
                                      <Slider
                                        step={1}
                                        minimumValue={0}
                                        maximumValue={10}
                                        value={v6}
                                        onValueChange={(slideValue) => setv6(slideValue)}
                                        minimumTrackTintColor="#8d264d"
                                        maximumTrackTintColor="#8d264d"
                                        thumbTintColor="#230a13"
                                      />
                                    </View>
                                    <Text>
                                      {v6}%{"\n"}
                                    </Text>
                                  </View>
                </View>

                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginLeft: 3 }}>Q7.{"\n"}</Text>
                    <Text style={{ marginRight: 50 }}>
                      . Poor appetite or overeating?{""}
                    </Text>
                  </View>
                                <View
                                  style={{
                                    width: 150,
                                    flexDirection: "row",
                                    marginLeft: 25,
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <View style={{ width: 250 }}>
                                    <Slider
                                      step={1}
                                      minimumValue={0}
                                      maximumValue={10}
                                      value={v7}
                                      onValueChange={(slideValue) => setv7(slideValue)}
                                      minimumTrackTintColor="#8d264d"
                                      maximumTrackTintColor="#8d264d"
                                      thumbTintColor="#230a13"
                                    />
                                  </View>
                                  <Text>
                                    {v7}%{"\n"}
                                  </Text>
                                </View>
                </View>

                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginLeft: 3 }}>Q8.{"\n"}</Text>
                    <Text style={{ marginRight: 50 }}>
                      Feeling bad about yourself — or that you are a failure or have
                      let yourself or your family down?{""}
                    </Text>
                  </View>
                                    <View
                                      style={{
                                        width: 150,
                                        flexDirection: "row",
                                        marginLeft: 25,
                                        justifyContent: "space-between",
                                      }}
                                    >
                                      <View style={{ width: 250 }}>
                                        <Slider
                                          step={1}
                                          minimumValue={0}
                                          maximumValue={10}
                                          value={v8}
                                          onValueChange={(slideValue) => setv8(slideValue)}
                                          minimumTrackTintColor="#8d264d"
                                          maximumTrackTintColor="#8d264d"
                                          thumbTintColor="#230a13"
                                        />
                                      </View>
                                      <Text>{v8}%</Text>
                                    </View>

                                    
                </View>

                <View style={{ justifyContent: "center",
                  alignItems: "center",
                  padding: 20,
                  paddingTop: 50,
                  marginBottom:30
    }}>
                  <FormButton
                    buttonTitle="Submit"
                    onPress={onsubmithandle}
                  />
                </View>
               
        </View>
       
    </ScrollView>
    <View style={{paddingBottom:10}}>
    <Bottombar />
    </View>
    
    
    
    </View>
  );
};

export default Questionnaire;

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
});
