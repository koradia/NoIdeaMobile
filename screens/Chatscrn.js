import React, {
  useEffect,
  useCallback,
  useState,
  useLayoutEffect,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Appbartab from "../components/Appbartab";
import Bottombar from "../components/Bottombar";
import Chatbox from "../components/Chatbox";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { Url, getToken } from "../components/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Chatscrn = () => {
  const [text, onChangeText] = React.useState(null);

  const [messagelist, setMessagelist] = useState([]);

  useEffect(()=>{
    const fetchchat=async()=>{
      const pid =await AsyncStorage.getItem('PID');
      const did= await AsyncStorage.getItem('DID');
      console.log(did);
    const token = await getToken();
    const result = await axios.post(Url + "/get/chats/",
        {
          did:did,
          pid
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .catch((e) => {
        console.log(e);
      });
      //console.log(result.data);
      setMessagelist(result.data);
    }

    fetchchat();
  },)

  const addmessage = async (e) => {
    if(text==null) alert("No mesg found");
    else {  e.preventDefault();
            onChangeText(null);
            const pid =await AsyncStorage.getItem('PID');
            const did= await AsyncStorage.getItem('DID');
            const token = await getToken();
            const res = await axios.post(Url + "/send/msg/",
              {
                did:did,
                pid,
                msg:text,
                sentfrom:2
              },
              {
                headers: {
                  Authorization: token,
                },
              }
            )
            .catch((e) => {
              console.log(e);
            });
    }
  };
  return (
    // Remove this provider if already registered elsewhere
    // or you have React Navigation set up
    <View style={{ flex: 1 }}>
      <View>
        <Appbartab />
      </View>
      <ScrollView contentContainerStyle={{ }}>
        {
          messagelist.map((ele,index)=>{
            return <Chatbox int={ele.sentfrom} text={ele.msg} time={ele.sentwhen}/>
          })
        }
        
      </ScrollView>
      <View style={{alignItems:'center'}}>
        <View
          style={{
            width: 350,
            height: 50,
            borderWidth: 0,
            marginBottom:10,
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#caf1de",
          }}
        >
          <Ionicons
            name="chatbox-ellipses-outline"
            size={25}
            color="black"
            style={{ marginTop: 5, marginRight: 10, marginLeft: 10 }}
          />
          <TextInput
            style={{
              height: 50,
              width: 250,
              
              borderWidth: 0,
              // padding: 10,
            }}
            onChangeText={onChangeText}
            value={text}
            placeholder="Type your message"
          />
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <TouchableOpacity onPress={addmessage}>
              <Ionicons
                name="md-send"
                size={25}
                color="black"
                style={{ marginTop: 5, marginRight: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={{ marginTop: 0 }}>
          <Bottombar />
        </View>
        </View>
    </View>
  );
};

export default Chatscrn;

const styles = StyleSheet.create({});
