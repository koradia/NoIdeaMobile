import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Appbartab from "../components/Appbartab";
import YoutubePlayer from "react-native-youtube-iframe";
import { Button, Checkbox } from "react-native-paper";
import Bottombar from "../components/Bottombar";
import { Dimensions } from "react-native";
import { CheckBox } from "@rneui/themed/dist/CheckBox";
import Videocomp from "../components/Videocomp";
import { Url, getToken } from "../components/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const { width, height } = Dimensions.get("screen");

const Videoscrn = () => {
  const [playing, setPlaying] = useState();
  const [playing1, setPlaying1] = useState();
  const [playing2, setPlaying2] = useState();
  const [playing3, setPlaying3] = useState();
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    const fetchData= async()=>{
      
      const token = await getToken();
      const pid = await AsyncStorage.getItem('PID');
      const res = await axios.post(Url + "/get/assigned/tasks/"+pid, 
      {},{headers:{
        "Authorization": token,
      }}
      ).catch((e)=>console.log(e));
      
      setVideolist(res.data);  
      console.log(videoList);
    }
    fetchData();
  },);

  let url="https://www.youtube.com/watch?v=fG1oNm2tCro";

  const [videoList,setVideolist]=useState([]);


  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View>
        <Appbartab />
      </View>
      <ScrollView>
      {videoList.map((ele,index) => (
            
              ele.tasktype===2 ? <Videocomp tid={ele.assignedTask.tid} text={ele.tasktext} vid={ele.tasklink} isComplete={ele.assignedTask.complete} did={ele.assignedTask.did} /> : <View></View>
            
            // <Videocomp vid={ele.tasklink} />
            
          ))}
       
      </ScrollView>
      <View style={{}}>
        <Bottombar />
      </View>
    </View>
  );
};

export default Videoscrn;

const styles = StyleSheet.create({});












/* <View style={{ margin: 20 }}>
<Text style={{ marginBottom: 10, fontSize: 15, fontWeight: "800" }}>
  Motivational Stories :{" "}
</Text>
<YoutubePlayer
  height={200}
  width={330}
  play={playing1}
  videoId={"kdXa4J_lKcY"}
  onChangeState={onStateChange1}
/>
{/* <Button mode="contained" title={playing ? "pause" : "play"} onPress={togglePlaying} >Play</Button> */
// </View>
/* <View style={{ margin: 20 }}> */
/* <Text style={{ marginBottom: 10, fontSize: 15, fontWeight: "800" }}>
  Motivational Stories :{" "}
</Text>
<YoutubePlayer
  height={200}
  width={330}
  play={playing1}
  videoId={"kdXa4J_lKcY"}
  onChangeState={onStateChange1}
/> */
/* <Button mode="contained" title={playing ? "pause" : "play"} onPress={togglePlaying} >Play</Button> */
// {/* </View> */} */}