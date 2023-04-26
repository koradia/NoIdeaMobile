import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Appbartab from "../components/Appbartab";
import { ToggleButton } from "react-native-paper";
import { Button } from "react-native-paper";
import { Dimensions } from "react-native";
import { Audio, Video } from "expo-av";
import Ionicons from "react-native-vector-icons/Ionicons";
import Bottombar from "../components/Bottombar";

const { width, height } = Dimensions.get("window");

const Audioscrn = () => {
  //const [sound, setSound] = React.useState();
  const [audioStatus, setAudioStatus] = useState(false);
  const [sound, setSound] = useState(new Audio.Sound());

  const [audioStatus1, setAudioStatus1] = useState(false);
  const [sound1, setSound1] = useState(new Audio.Sound());

  const [audioStatus2, setAudioStatus2] = useState(false);
  const [sound2, setSound2] = useState(new Audio.Sound());

  const [audioStatus3, setAudioStatus3] = useState(false);
  const [sound3, setSound3] = useState(new Audio.Sound());




  useEffect(() => {
    (async () => {
      console.log("status", audioStatus);
      
      if (audioStatus) {
        setAudioStatus1(false);
      setAudioStatus2(false);
      setAudioStatus3(false);
        await sound.loadAsync(require("../assets/om.mp3"));
        try {
          await sound.playAsync();
        } catch (e) {
          console.log(e);
        }
      } else {
        await sound.stopAsync();
        await sound.unloadAsync();
      }
    })();
  }, [audioStatus]);

  useEffect(() => {
    (async () => {
      console.log("status", audioStatus1);
      if (audioStatus1) {
        setAudioStatus(false);
        setAudioStatus2(false);
        setAudioStatus3(false);
        await sound1.loadAsync(require("../assets/marron.mp3"));
        try {
          await sound1.playAsync();
        } catch (e) {
          console.log(e);
        }
      } else {
        await sound1.stopAsync();
        await sound1.unloadAsync();
      }
    })();
  }, [audioStatus1]);

  useEffect(() => {
    (async () => {
      console.log("status", audioStatus2);
      if (audioStatus2) {
        setAudioStatus1(false);
        setAudioStatus0(false);
        setAudioStatus3(false);
        await sound2.loadAsync(require("../assets/flute.mp3"));
        try {
          await sound2.playAsync();
        } catch (e) {
          console.log(e);
        }
      } else {
        await sound2.stopAsync();
        await sound2.unloadAsync();
      }
    })();
  }, [audioStatus2]);

  useEffect(() => {
    (async () => {
      console.log("status", audioStatus3);
      if (audioStatus3) {
        setAudioStatus1(false);
        setAudioStatus2(false);
        setAudioStatus0(false);
        await sound3.loadAsync(require("../assets/om.mp3"));
        try {
          await sound3.playAsync();
        } catch (e) {
          console.log(e);
        }
      } else {
        await sound3.stopAsync();
        await sound3.unloadAsync();
      }
    })();
  }, [audioStatus3]);

  return (
    <View style={{  height: height * 1.04 }}>
      <Appbartab />
      <ScrollView contentContainerStyle={{backgroundColor:'#ffffff'}}>
        {/* <Button
          color={audioStatus ? "red" : "green"}
          title={"play"}
          onPress={()=>setAudioStatus(!audioStatus)}
        >
          qwr
        </Button> */}
        <View
          style={{
            flexDirection: "row",
            marginLeft: 10,
            marginRight: 10,
            marginTop: 40,
          }}
        >
                  <View
                    style={{
                      borderWidth: 0,
                      width: 170,
                      height: 250,
                      borderRadius: 20,
                      backgroundColor: "#DAF5FF",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        margin: 15,
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{ marginTop: 12, fontFamily: "serif", fontSize: 16, color:'#19376D' }}
                      >
                        Omkar{"\n"}Mantra
                      </Text>
                      <TouchableOpacity onPress={() => setAudioStatus(!audioStatus)}>
                        <Ionicons
                          name={
                            audioStatus
                              ? "md-pause-circle-outline"
                              : "md-play-circle-outline"
                          }
                          size={40}
                          color="#7286D3"
                          style={{ marginTop: 10 }}
                        />
                      </TouchableOpacity>
                    </View>

                    <Text
                      style={{ fontSize: 13, margin: 10, marginTop: 40, color: "#7286D3" }}
                    >
                      Do it for 2-4 min will help you to relax.
                    </Text>
                    {/* <Video
                                                                    ref={video}
                                                                    style={{margin:10, width:100, height:80,paddingTop:250 }}
                                                                    source={require('../assets/soundwave2.mp4')}
                                                                    isLooping={true}
                                                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                                                  /> */}
                  </View>
                  <View
                    style={{
                      borderWidth: 0,
                      width: 170,
                      height: 250,
                      marginLeft: 20,
                      marginTop: 80,
                      borderRadius: 20,
                      backgroundColor: "#FFF3E2",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        margin: 15,
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{ marginTop: 12, fontFamily: "serif", fontSize: 16, color:'#E74646' }}
                      >
                        Memories{"\n"}song
                      </Text>
                      <TouchableOpacity onPress={() => setAudioStatus1(!audioStatus1)}>
                        <Ionicons
                          name={
                            audioStatus1
                              ? "md-pause-circle-outline"
                              : "md-play-circle-outline"
                          }
                          size={40}
                          color="#FA9884"
                          style={{ marginTop: 10 }}
                        />
                      </TouchableOpacity>
                    </View>

                    <Text
                      style={{ fontSize: 13, margin: 10, marginTop: 40, color: "#FA9884" }}
                    >
                      Recall all of your good memories.
                    </Text>
                  </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginLeft: 10,
            marginRight: 10,
            marginTop: 0,
          }}
        >
                    <View
                      style={{
                        borderWidth: 0,
                        width: 170,
                        height: 250,
                        borderRadius: 20,
                        backgroundColor: "#FDE2F3",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          margin: 15,
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{ marginTop: 12, fontFamily: "serif", fontSize: 16, color:'#2A2F4F' }}
                        >
                          Krishna's{"\n"}Flute
                        </Text>
                        <TouchableOpacity onPress={() => setAudioStatus2(!audioStatus2)}>
                          <Ionicons
                            name={
                              audioStatus2
                                ? "md-pause-circle-outline"
                                : "md-play-circle-outline"
                            }
                            size={40}
                            color="#917FB3"
                            style={{ marginTop: 10 }}
                          />
                        </TouchableOpacity>
                      </View>

                      <Text
                        style={{ fontSize: 13, margin: 10, marginTop: 40, color: "#917FB3" }}
                      >
                        Will make you calm and feels like just time has stopped by.
                      </Text>
                      {/* <Video
                                                                      ref={video}
                                                                      style={{margin:10, width:100, height:80,paddingTop:250 }}
                                                                      source={require('../assets/soundwave2.mp4')}
                                                                      isLooping={true}
                                                                      onPlaybackStatusUpdate={status => setStatus(() => status)}
                                                                    /> */}
                    </View>
                    <View
                      style={{
                        borderWidth: 0,
                        width: 170,
                        height: 250,
                        marginLeft: 20,
                        marginTop: 80,
                        borderRadius: 20,
                        backgroundColor: "#E5FDD1",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          margin: 15,
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{ marginTop: 12, fontFamily: "serif", fontSize: 16, color:'#1F8A70' }}
                        >
                          Omka{"\n"}Mantra
                        </Text>
                        <TouchableOpacity onPress={() => setAudioStatus3(!audioStatus3)}>
                          <Ionicons
                            name={
                              audioStatus3
                                ? "md-pause-circle-outline"
                                : "md-play-circle-outline"
                            }
                            size={40}
                            color="#AACB73"
                            style={{ marginTop: 10 }}
                          />
                        </TouchableOpacity>
                      </View>

                      <Text
                        style={{ fontSize: 13, margin: 10, marginTop: 40, color: "#AACB73" }}
                      >
                        Do it for 2-4 min will help you to relax.
                      </Text>
                    </View>
        </View>

        {/* <View
          style={{
            flexDirection: "row",
            marginLeft: 10,
            marginRight: 10,
            marginTop: 0,
          }}
        >
                  <View
                    style={{
                      borderWidth: 0,
                      width: 170,
                      height: 250,
                      borderRadius: 20,
                      backgroundColor: "#DAF5FF",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        margin: 15,
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{ marginTop: 12, fontFamily: "serif", fontSize: 16 }}
                      >
                        Omkar{"\n"}Mantra
                      </Text>
                      <TouchableOpacity onPress={() => setAudioStatus(!audioStatus)}>
                        <Ionicons
                          name={
                            audioStatus
                              ? "md-pause-circle-outline"
                              : "md-play-circle-outline"
                          }
                          size={40}
                          color="black"
                          style={{ marginTop: 10 }}
                        />
                      </TouchableOpacity>
                    </View>

                    <Text
                      style={{ fontSize: 13, margin: 10, marginTop: 40, color: "grey" }}
                    >
                      Do it for 2-4 min will help you to relax.
                    </Text>
                  </View>

                  <View
                    style={{
                      borderWidth: 0,
                      width: 170,
                      height: 250,
                      marginLeft: 20,
                      marginTop: 80,
                      marginBottom: 20,
                      borderRadius: 20,
                      backgroundColor: "#FDF7C3",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        margin: 15,
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{ marginTop: 12, fontFamily: "serif", fontSize: 16 }}
                      >
                        Omka{"\n"}Mantra
                      </Text>
                      <TouchableOpacity onPress={() => setAudioStatus(!audioStatus)}>
                        <Ionicons
                          name={
                            audioStatus
                              ? "md-pause-circle-outline"
                              : "md-play-circle-outline"
                          }
                          size={40}
                          color="black"
                          style={{ marginTop: 10 }}
                        />
                      </TouchableOpacity>
                    </View>

                    <Text
                      style={{ fontSize: 13, margin: 10, marginTop: 40, color: "grey" }}
                    >
                      Do it for 2-4 min will help you to relax.
                    </Text>
                  </View>
        </View> */}

      </ScrollView>
      <View style={{ }}>
        <Bottombar />
      </View>
    </View>
  );
};

export default Audioscrn;

const styles = StyleSheet.create({});
