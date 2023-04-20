import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import { Dimensions } from "react-native";
import { Button, Card, Paragraph } from "react-native-paper";
import { windowHeight, windowWidth } from "../components/Dimensions";
import Appbartab from "../components/Appbartab";
import AntDesign from "react-native-vector-icons/AntDesign";
import Bottombar from "../components/Bottombar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Url, getToken } from "../components/config";
import axios from "axios";


const { width, height } = Dimensions.get("screen");





const Userprof = ({navigation}) => {

  const [name, setName] = useState();
  const [phnumber, setPhnumber] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  //const [datePicker, setDatePicker] = useState(false);
  const [kg, setKg] = useState();
  const [ht,setHt] = useState();
  const [gen, setGen]= useState(null);
  const [date, setDate] = useState();
  const [bg, setBg] = useState();
  const [age, setAge] = useState();



  // const navigation =useNavigation();
  const onlogout=()=>{
    AsyncStorage.removeItem('JWT');
    AsyncStorage.removeItem('PID');
    //AsyncStorage.clear();
   try{ 
    //navigation.navigate('LoadingScreen');
     navigation.navigate('LoginScreen');
    }catch(err){
     console.log(err);
    }
  }

  useEffect(()=>{
    const renderdetails = async() => {
      
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
      console.log(nav.data);
      setName(nav.data.name);
      setAddress(nav.data.address);
      setPhnumber(nav.data.phone);
      setDate(nav.data.bdate);
      setEmail(nav.data.email);
      setHt(nav.data.height);
      setKg(nav.data.weight);
      setDate(nav.data.bDate);
      setBg(nav.data.bloodgroup);
      setAge(nav.data.age)
      if(nav.data.gender==1) setGen('male');
      else setGen('Female');
      
    }
    renderdetails();

  },[])

  return (
    <View style={styles.container}>
      <Appbartab />
      <View style={styles.header}>
        <ImageBackground
          style={{ width: width }}
          source={require("../images/bgprof.jpg")}
        >
          {/* <View style={{width:50}}>
            <AntDesign name="back" size={30} style={{borderWidth:2, padding:5}}/>
          </View> */}
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri: "https://bootdey.com/img/Content/avatar/avatar1.png",
              }}
            />
            <Text style={styles.name}>John Doe</Text>
          </View>
        </ImageBackground>
      </View>

      <ScrollView contentContainerStyle={styles.body}>

        <View style={styles.inputContainer}>
          <View style={styles.iconStyle}>
            <AntDesign name="user" size={20} color="black" />
          </View>
          <Text style={{ color: "grey", fontSize: 10 }}>
            {" "}
            Name{"\n"}
            <Text style={{ fontSize: 16, color: "black" }}> {name}</Text>
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.iconStyle}>
            <AntDesign name="user" size={20} color="black" />
          </View>
          <Text style={{ color: "grey", fontSize: 10 }}>
            {" "}
            Email{"\n"}
            <Text style={{ fontSize: 16, color: "black" }}> {email}</Text>
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.iconStyle}>
            <AntDesign name="smileo" size={20} color="black" />
          </View>
          <Text style={{ color: "grey", fontSize: 10 }}>
            {" "}
            Age{"\n"}
            <Text style={{ fontSize: 16, color: "black" }}> {age}</Text>
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.iconStyle}>
            <AntDesign name="phone" size={20} color="black" />
          </View>
          <Text style={{ color: "grey", fontSize: 10 }}>
            {" "}
            Phone{"\n"}
            <Text style={{ fontSize: 16, color: "black" }}> {phnumber}</Text>
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.iconStyle}>
            <AntDesign name="tag" size={20} color="black" />
          </View>
          <Text style={{ color: "grey", fontSize: 10 }}>
            {" "}
            Address{"\n"}
            <Text style={{ fontSize: 16, color: "black" }}> {address}</Text>
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.iconStyle}>
            <AntDesign name="dashboard" size={20} color="black" />
          </View>
          <Text style={{ color: "grey", fontSize: 10 }}>
            {" "}
            Weight{"\n"}
            <Text style={{ fontSize: 16, color: "black" }}> {kg}</Text>
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.iconStyle}>
            <AntDesign name="info" size={20} color="black" />
          </View>
          <Text style={{ color: "grey", fontSize: 10 }}>
            {" "}
            Height{"\n"}
            <Text style={{ fontSize: 16, color: "black" }}> {ht}</Text>
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.iconStyle}>
            <AntDesign name="hearto" size={20} color="black" />
          </View>
          <Text style={{ color: "grey", fontSize: 10 }}>
            {" "}
            Blood group{"\n"}
            <Text style={{ fontSize: 16, color: "black" }}> {bg}</Text>
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.iconStyle}>
            <AntDesign name="hearto" size={20} color="black" />
          </View>
          <Text style={{ color: "grey", fontSize: 10 }}>
            {" "}
            Gender{"\n"}
            <Text style={{ fontSize: 16, color: "black" }}> {gen}</Text>
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            padding: 20,
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            paddingTop: 18,
          }}
        >
          <TouchableOpacity onPress={()=>navigation.navigate('Editprof')}>
            <Button
              style={{
                borderWidth: 1,
                borderColor: "black",
                width: width * 0.35,
                marginRight: 20,
              }}
            >
              Edit Profile
            </Button>
          </TouchableOpacity>
          <TouchableOpacity onPress={onlogout}>
            <Button style={{ borderWidth: 1, borderColor: "black" }}>
              Log out
            </Button>
          </TouchableOpacity>
        </View>

       

      </ScrollView>
      <Bottombar />
    </View>
  );
};

export default Userprof;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 0,
    marginTop: 0,
    padding: 0,
  },
  headerContent: {
    alignItems: "center",
    paddingBottom: 20,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    marginTop: 20,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600",
  },
  body: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageContainer: {
    width: "33%",
    padding: 5,
  },
  image: {
    width: "100%",
    height: 120,
  },
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: width * 0.8,
    height: windowHeight / 19,
    //borderColor: '#F8EDE3',
    // marginLeft:10,
    // marginRight:15,
    borderBottomColor: "#402218",
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    //backgroundColor: '#F8EDE3',
  },
  iconStyle: {
    padding: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "#402218",
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 15,
    // fontFamily: 'Lato-Regular',
    color: "#402218",
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
