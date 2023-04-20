import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Appbartab from "../components/Appbartab";
import YoutubePlayer from "react-native-youtube-iframe";
import { Button } from "react-native-paper";
import Bottombar from "../components/Bottombar";
import { Dimensions } from "react-native";

const {width, height} =Dimensions.get('screen');

const Videoscrn = () => {
  const [playing, setPlaying] = useState();
  const [playing1, setPlaying1] = useState();
  const [playing2, setPlaying2] = useState();
  const [playing3, setPlaying3] = useState();

  const togglePlaying = () => {
    setPlaying((prev) => !prev);
  };

  const onStateChange = (state) => {
    if (state === 'ended') {
        setPlaying(false);
        alert('video has finished playing!');
    }
};

const onStateChange1 = (state) => {
  if (state === 'ended') {
      setPlaying1(false);
      alert('video has finished playing!');
  }
};

const onStateChange2 = (state) => {
  if (state === 'ended') {
      setPlaying2(false);
      alert('video has finished playing!');
  }
};
  
  return (
    <View style={{height:height}}>
      <View>
      <Appbartab /></View>
      <ScrollView>
      <View style={{ margin: 20 }}>
        <Text style={{marginBottom:10, fontSize:15, fontWeight:'800'}}>Importance of Meditation : </Text>
        <YoutubePlayer height={200} width={330}  play={playing} videoId={"wruCWicGBA4"} onChangeState={onStateChange} />
        {/* <Button mode="contained" title={playing ? "pause" : "play"} onPress={togglePlaying} >Play</Button> */}
      </View>

      <View style={{ margin: 20 }}>
      <Text style={{marginBottom:10, fontSize:15, fontWeight:'800'}}>Motivational Stories : </Text>
        <YoutubePlayer height={200} width={330}  play={playing1} videoId={"kdXa4J_lKcY"} onChangeState={onStateChange1} />
        {/* <Button mode="contained" title={playing ? "pause" : "play"} onPress={togglePlaying} >Play</Button> */}
      </View>


      
      </ScrollView>
        <View style={{marginTop:height*.21}}>
      <Bottombar />
      </View>
    </View>
  );
};

export default Videoscrn;

const styles = StyleSheet.create({});
