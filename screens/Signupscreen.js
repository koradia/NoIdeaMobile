import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";
//import { auth } from '../firebase';
import { ScrollView } from "react-native-gesture-handler";
//import Adddetails from './Adddetails';
import Formpass from "../components/Formpass";
const img3 = { uri: "https://i.ibb.co/WvcQTtK/imgbg.jpg" };
import { Dimensions } from "react-native";
import axios from "axios";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import config from "../components/config";

const { width, height } = Dimensions.get("screen");

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [name, setName] = useState(null);

  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePress");
  };
  const onPrivacyPressed = () => {
    console.warn("onPrivacyUpPress");
  };

  const img3 = { uri: "https://i.ibb.co/WvcQTtK/imgbg.jpg" };

  const onhandlecontinue = async (e) => {
    if (
      name === null ||
      email === null ||
      password === null ||
      password != confirmPassword
    ) {
      alert("please fill entire with data or password mismatch");
    } else {
      
      e.preventDefault();
      navigation.navigate("Adddetails", {  name, email ,password});

      // const token=result.data;
      // localStorage.setItem('jwtToken', token);
      // const temp = localStorage.getItem('jwtToken');
      // console.log(temp);
      // console.log(result);
    }
  };
  return (
    <ScrollView>
      <ImageBackground
        source={img3}
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
              labelValue={name}
              onChangeText={(name) => setName(name)}
              placeholderText="Name"
              iconType="user"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
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
            <Formpass
              labelValue={confirmPassword}
              onChangeText={(userPassword) => setConfirmPassword(userPassword)}
              placeholderText="Confirm Password"
              iconType="lock"
              iconType1="eye"
            />
          </View>

          <View
            style={{
              flex: 1,
              alignContent: "center",
              justifyContent: "center",
              paddingTop: 20,
            }}
          >
            <Text style={{ textAlign: "center" }}>
              By Registering, you confirm that you accept our{" "}
              <Text style={{ color: "#e88832" }} onPress={onTermsOfUsePressed}>
                Terms of Use{" "}
              </Text>{" "}
              and{" "}
              <Text style={{ color: "#e88832" }} onPress={onPrivacyPressed}>
                Privacy Policy.
              </Text>
            </Text>
          </View>

          <View
            style={{ paddingTop: 30, alignItems: "center", paddingBottom: 0 }}
          >
            <FormButton buttonTitle="Register" onPress={onhandlecontinue} />

            <View
              style={{
                flexDirection: "row",
                paddingTop: 30,
                paddingBottom: 30,
              }}
            >
              <Text style={{}}>Have an account?</Text>
              <TouchableOpacity
                style={{}}
                onPress={() => navigation.navigate("LoginScreen")}
              >
                <Text
                  style={{
                    textDecorationLine: "underline",
                    fontWeight: "bold",
                  }}
                >
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default SignupScreen;

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
    marginTop: 60,
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
