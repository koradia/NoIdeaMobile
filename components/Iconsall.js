import {
    StyleSheet,
    Text,
    View,
    
    ScrollView,
    TouchableOpacity,
    
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { Card, Avatar, Appbar, Paragraph, Title } from "react-native-paper";
  import FormButton from "../components/FormButton";
  import { Dimensions } from "react-native";

  import ProgressCircle from "react-native-progress-circle";

import { useNavigation } from "@react-navigation/native";
import { Url, getToken } from "./config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const {width, height} =Dimensions.get('screen');

const Iconsall = () => {

    const [progress, setProgress] = useState(30);

    const [progress1, setProgress1] = useState(50);
  
    const [progress2, setProgress2] = useState(70);

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
          let p1= (res.data[0].compl)/(res.data[0].assig)
          let p3= (res.data[1].compl)/(res.data[1].assig)
          setProgress(p1*100)
          setProgress2(p3*100)
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    },[2])

    const navigation=useNavigation();
  return (
    <ScrollView
          contentContainerStyle={{ flexDirection: "row", padding: 5 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={{marginLeft:15}}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Taskmanager")}
            >
              <Card
                style={{
                  paddingTop: 3,
                  height: height * 0.15,
                  width: width * 0.6,
                  marginLeft: width * 0.01,
                  marginRight: height * 0.008,
                  marginTop: 10,
                  marginBottom: 10,
                  backgroundColor: "#CCD5AE",
                  flex: 1,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Card.Cover
                    source={require("../images/task.png")}
                    style={{
                      backgroundColor: "#CCD5AE",
                      width: width * 0.26,
                      height: height * 0.12,
                      marginTop: 5,
                      marginLeft: 10,
                      paddingTop: 2,
                    }}
                  ></Card.Cover>
                  <View style={{ marginLeft: 20, paddingTop: 15 }}>
                    <ProgressCircle
                      percent={progress}
                      radius={40}
                      borderWidth={5}
                      color="#57d83c"
                      shadowColor="#0d2808"
                      bgColor="#CCD5AE"
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          color: "#0d2808",
                          fontWeight: "bold",
                          fontStyle: "italic",
                        }}
                      >
                        {progress}%
                      </Text>
                    </ProgressCircle>
                  </View>
                  <Card.Content style={{ padding: 0 }}>
                    {/* <ProgressCircle
                    percent={progress}
                    radius={25}
                    borderWidth={3}
                    color="#521262"
                    shadowColor="#ffd5e5"
                    bgColor="#FFD5E5"
                  >
                    <Text style={{ fontSize: 12 }}>{progress}%</Text>
                  </ProgressCircle> */}
                  </Card.Content>
                </View>
                <Card.Actions>{/* <button>Ok</button> */}</Card.Actions>
              </Card>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Videoscrn')}>
              <Card
                style={{
                  paddingTop: 3,
                  height: height * 0.15,
                  width: width * 0.6,
                  marginLeft: width * 0.01,
                  marginRight: height * 0.008,
                  marginTop: 10,
                  marginBottom: 10,
                  backgroundColor: "#D9ACF5",
                  flex: 1,
                }}
              >
                <View style={{ flexDirection: "row", paddingTop: 10 }}>
                  <Card.Cover
                    source={require("../images/video1.png")}
                    style={{
                      backgroundColor: "#D9ACF5",
                      width: width * 0.26,
                      height: height * 0.12,
                      marginTop: 0,
                      marginLeft: 10,
                      paddingTop: 2,
                    }}
                  ></Card.Cover>
                  <View
                    style={{ paddingLeft: 5, paddingTop: 10, paddingLeft: 20 }}
                  >
                    <ProgressCircle
                      percent={progress}
                      radius={40}
                      borderWidth={5}
                      color="#57d83c"
                      shadowColor="#0d2808"
                      bgColor="#D9ACF5"
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          color: "#0d2808",
                          fontWeight: "bold",
                          fontStyle: "italic",
                        }}
                      >
                        {progress2}%
                      </Text>
                    </ProgressCircle>
                  </View>
                  <Card.Content style={{ paddingTop: 20 }}></Card.Content>
                </View>
                <Card.Actions>{/* <button>Ok</button> */}</Card.Actions>
              </Card>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Audioscrn')}>
              <Card
                style={{
                  paddingTop: 3,
                  height: height * 0.15,
                  width: width * 0.6,
                  marginLeft: width * 0.01,
                  marginRight: height * 0.008,
                  marginTop: 10,
                  marginBottom: 10,
                  backgroundColor: "#E8D5C4",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    paddingRight: 20,
                    paddingTop: 5,
                    paddingLeft: 8,
                  }}
                >
                  <Card.Cover
                    source={require("../images/music1.png")}
                    style={{
                      //backgroundColor: "#3b2f2f",
                      backgroundColor: "#E8D5C4",
                      width: width * 0.26,
                      height: height * 0.12,
                      marginTop: 5,
                      paddingLeft: 2,
                    }}
                  ></Card.Cover>
                  <View style={{ marginLeft: 30, paddingTop: 13 }}>
                    <ProgressCircle
                      percent={progress1}
                      radius={40}
                      borderWidth={5}
                      color="#57d83c"
                      shadowColor="#0d2808"
                      bgColor="#E8D5C4"
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          color: "#0d2808",
                          fontWeight: "bold",
                          fontStyle: "italic",
                        }}
                      >
                        {progress1}%
                      </Text>
                    </ProgressCircle>
                  </View>
                  <Card.Content style={{}}></Card.Content>
                </View>
                <Card.Actions>{/* <button>Ok</button> */}</Card.Actions>
              </Card>
            </TouchableOpacity>
          </View>

          
        </ScrollView>
  )
}

export default Iconsall;

const styles = StyleSheet.create({})