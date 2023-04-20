import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";
import Formpass from "../components/Formpass";
import { ImageBackground } from "react-native";
import { color } from "@rneui/themed/dist/config";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config, { Url, getToken } from "../components/config";

const { width, height } = Dimensions.get("screen");

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [jwt, setJwt] = useState();

  const onsigninhandle = async (e) => {
    
    e.preventDefault();
    const result = await axios.post(Url + "/pat/authenticate", {
        username: email,
        password,
        role: 2,
      },{})
      .catch(function (error) {
        alert("Wrong credentials or no account with this creds");
        console.log(error);
        
      });
    if (result && result.status == 200) {
      const value = JSON.stringify(result.data.token);
      const id = JSON.stringify(result.data.id);
      console.log(result.data)
      try {
        await AsyncStorage.setItem("PID", id);
        await AsyncStorage.setItem("JWT", value);
        const res = await AsyncStorage.getItem("JWT");
        console.log(JSON.parse(res) + "from login");
        //navigation.navigate('Dashboard');
      } catch (err) {
        console.log("qwert");
      }
      const token= await getToken();
      console.log(token);
      
      
      navigation.navigate('Dashboard');
    
    } else {
      
      navigation.navigate("LoginScreen");
      
    }

    // const token=result.data;
    // localStorage.setItem('jwtToken', token);
    // const temp = localStorage.getItem('jwtToken');
    // console.log(temp);
    // console.log(result);
  };
  useEffect(()=>{

    const setAlreadyLaunched = async ()=>{
      await AsyncStorage.setItem('alreadyLaunched','true');
      console.log( "At login page");
    }
    setAlreadyLaunched();
  },[])
  return (
    <ScrollView>
      <ImageBackground
        source={require("../images/imgbg.jpg")}
        resizeMode="cover"
        style={{ justifyContent: "center" }}
        imageStyle={{
          width: width,
          // opacity: 0.25,
          height: height * 1,
          borderRadius: 5,
        }}
      >
        <View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Image
              style={styles.logo}
              source={require("../images/logoori.png")}
            />
            <Image
              style={{
                width: width * 0.95,
                height: height * 0.07,
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                //flexDirection: "row",
              }}
              source={require("../images/namer.png")}
            />
          </View>

          <View style={{ paddingTop: 20, alignItems: "center" }}>
            <FormInput
              labelValue={email}
              onChangeText={(userEmail) => setEmail(userEmail)}
              placeholderText="Email"
              iconType="user"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Formpass
              labelValue={password}
              onChangeText={(userPassword) => setPassword(userPassword)}
              placeholderText="Enter Password"
              iconType="lock"
              iconType1="eye"
            />
          </View>

          <View style={{ paddingTop: 30, alignItems: "center" }}>
            <FormButton buttonTitle="Sign In" onPress={onsigninhandle} />

            <View style={{ flexDirection: "row", paddingTop: 80 }}>
              <Text style={{}}>Don't have an acount?</Text>
              <TouchableOpacity
                style={{}}
                onPress={() => navigation.navigate("Signup")}
              >
                <Text
                  style={{
                    textDecorationLine: "underline",
                    fontWeight: "bold",
                    paddingBottom: height * 0.15,
                  }}
                >
                  Create here
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: height * 0.1,
  },
  logo: {
    height: height * 0.25,
    width: width * 0.6,
    resizeMode: "cover",
    marginTop: 100,
    padding: 50,

    alignContent: "center",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "cursive",
    fontSize: 20,
    marginBottom: 8,
    color: "#051d5f",
  },
  navButton: {
    marginBottom: 100,
    color: "#7D6E83",
    // backgroundColor:'#FCFFE9',
  },
  forgotButton: {
    //marginVertical: 5,

    // marginBottom:height*.05,
    marginRight: width * 0.19,
    marginBottom: 20,
    fontSize: 13,
    color: "#402218",
    // backgroundColor:'#FCFFE9',
  },
  navButtonText: {
    fontSize: 15,
    fontWeight: "500",
    paddingTop: 1000,
    color: "#402218",
    fontFamily: "Lato-Regular",
    paddingBottom: 500,
    // backgroundColor:'#FCFFE9',
    paddingBottom: height * 0.2,
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,

    // backgroundColor:'#FCFFE9',
  },
});
