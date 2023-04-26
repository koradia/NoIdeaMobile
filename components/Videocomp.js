import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import YoutubePlayer from "react-native-youtube-iframe";
import { Button, Checkbox } from "react-native-paper";
import { Dimensions } from 'react-native';
import { Url, getToken } from './config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const {width, height}= Dimensions.get('screen')
const Videocomp = (props) => {

  const {tid, text, vid, isComplete, did}= props;

    const [playing, setPlaying] = useState();
    const [isChecked,setIsChecked]=useState(isComplete);

    

    const [qid,setQid]= useState();

    useEffect(()=>{
        const extractvid=(vid)=>{
            let rev= vid.split("").reverse().join("");
            console.log(rev);
            let position = vid.length- rev.search("/");
            let id = vid.substring(position);
            setQid(id);
            console.log(qid);
            //console.log(qid)
          }
         // console.log(vid);
          extractvid(vid);
          //console.log(qid);
          
    },[])
   
    const onStateChange = (state) => {
        if (state === "ended") {
          setPlaying(false);
          alert("video has finished playing!");
        }
      };

      const oncheckhandle=async ()=>{
        const token = await getToken();
        const pid = await AsyncStorage.getItem('PID');
        if(isChecked){
            setIsChecked(false);
            const res= await axios.post(Url +"/set/taskincomplete",
            {
                pid,
                tid,
                did

            },{headers:{
                "Authorization": token,
              }}
              ).catch((e)=>console.log(e));
              console.log(res.data);

        }
        else{
            setIsChecked(true);
            const res= await axios.post(Url +"/set/taskcomplete",
            {
                pid,
                tid,
                did

            },{headers:{
                "Authorization": token,
              }}
              ).catch((e)=>console.log(e));
              console.log(res.data);
        }

    }


  return (
    <View>

    <View style={{ margin: 20, marginTop:30, alignItems:'center' }}>
          <View style={{borderWidth:0, backgroundColor:'#e7f0f9', alignItems:'center', width:width*.9, height:height*.3, borderRadius:20}}>
             <View style={{ borderWidth: 0, flexDirection: "row", margin:10,flex:1 }}>
                    <Text style={{ fontSize: 15, fontWeight: "800", marginTop:5, width:220, color:"#610000" }}>
                      {text}
                    </Text>
                    <View style={{  left:15}}>
                      <Checkbox
                        status={isChecked ? "checked" : "unchecked"}
                        onPress={oncheckhandle}
                        color="#610000"
                      />
                    </View>
             </View>
             <View style={{margin:5, marginTop:2}}>
                <YoutubePlayer
                  height={180}
                  width={280}
                  play={playing}
                  videoId={qid}
                  onChangeState={onStateChange}
                /></View>
         
        </View>
        </View>


    </View>
  )
}

export default Videocomp;

const styles = StyleSheet.create({})