import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Component } from "react";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button } from "react-native";
import Radio from "../components/Radiobuttons";
import DatePicker from "react-native-datepicker";
import { ImageBackground } from "react-native";
import { Dimensions } from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";
import { useNavigation } from "@react-navigation/native";
import { useNavigationParam } from "@react-navigation/native";
import axios from "axios";
import config, { Url } from "../components/config";
const img3 = { uri: "https://i.ibb.co/WvcQTtK/imgbg.jpg" };

const radioButtonsData = [
  {
    id: "1", // acts as primary key, should be unique and non-empty string
    label: "Male",
    value: "M",
  },
  {
    id: "2",
    label: "Female",
    value: "F",
  },
];

const { width, height } = Dimensions.get("screen");

const Adddetails = ({ route, navigation }) => {
  // const [name, setName] = useState();
  const [phnumber, setPhnumber] = useState("123");
  const [address, setAddress] = useState("qwerty");
  // const [email, setEmail] = useState();
  const [datePicker, setDatePicker] = useState(false);
  const [kg, setKg] = useState("55");
  const [ht, setHt] = useState("166");
  const [gen, setGen] = useState(null);
  const [date, setDate] = useState(new Date());
  const [bg, setBg] = useState("O+");
  const [age, setAge]= useState();

  const onhandlesubmit = async (e) => {
    if (
      phnumber == null ||
      address == null ||
      kg == null ||
      ht == null ||
      gen == null ||
      bg == null ||
      age== null
    ) {
      alert("please enter all the details");
    } else {
      e.preventDefault();
      const res = await axios
        .post(
          Url + "/pat/register",

          {
            username: name,
            email: email,
            password,
            role: 2,
          }
        )
        .catch(() => {
          alert("please use different username");
          navigation.navigate("Signup");
        });
      console.log(res.data);
      const result = await axios.post(Url + "/pat/savedetail", {
        pid: res.data,
        name,
        phone: phnumber,
        address,
        email,
        photolink: null,
        score: null,
        age:age,
        gender: gen,
        weight: parseInt(kg.substring(0), 10),
        height: parseInt(ht.substring(0), 10),
        journal: null,
        bloodgroup:bg,
      });
      // console.log(result);
      if (result.status == 200) {
        //console.log(result.data);
        //setId(result.data);
        navigation.navigate("LoginScreen");
      }

      // const token=result.data;
      // localStorage.setItem('jwtToken', token);
      // const temp = localStorage.getItem('jwtToken');
      // console.log(temp);
      // console.log(result);
    }
  };

  function showDatePicker() {
    setDatePicker(true);
  }

  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }

  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
    //console.log(radioButtonsArray[0].selected==true);
    if (radioButtonsArray[0].selected == true) {
      setGen(1);
    } else {
      setGen(0);
    }
  }
  //console.log(navigation);
  const { name, email, password } = route.params;
  return (
    <ScrollView>
      <ImageBackground
        source={img3}
        resizeMode="cover"
        style={{ justifyContent: "center" }}
        imageStyle={{
          width: width,
          // opacity: 0.25,
          height: height * 1.2,
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
          </View>
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            Hi {name}! {"\n"}Enter Your details{" "}
          </Text>
          <View style={{ paddingTop: 20, alignItems: "center" }}>
            <View>
              <FormInput
                labelValue={phnumber}
                onChangeText={(userPhnumber) => setPhnumber(userPhnumber)}
                placeholderText="Contact Number"
                iconType="phone"
                keyboardType="phone-pad"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View>
              {datePicker && (
                <DateTimePicker
                  value={date}
                  mode={"date"}
                  display={Platform.OS === "ios" ? "spinner" : "default"}
                  is24Hour={true}
                  onChange={onDateSelected}
                  style={styleSheet.datePicker}
                />
              )}
            </View>
            <View>
              <FormInput
                labelValue={address}
                onChangeText={(useradd) => setAddress(useradd)}
                placeholderText="Address"
                iconType="home"
                keyboardType="address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            <View>
              <FormInput
                labelValue={kg}
                onChangeText={(userkg) => setKg(userkg)}
                placeholderText="weight in kgs"
                iconType="infocirlce"
                keyboardType="phone-pad"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            <View>
              <FormInput
                labelValue={ht}
                onChangeText={(userwt) => setHt(userwt)}
                placeholderText="height in cm"
                iconType="infocirlce"
                keyboardType="phone-pad"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View>
              <FormInput
                labelValue={bg}
                onChangeText={(userbg) => setBg(userbg)}
                placeholderText="Blood Group"
                iconType="infocirlce"
                keyboardType="address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View>
              <FormInput
                labelValue={age}
                onChangeText={(userage) => setAge(userage)}
                placeholderText="Enter your Age"
                iconType="infocirlce"
                keyboardType="phone-pad"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* <View style={{}}>
              <TouchableOpacity onPress={showDatePicker}>
                <Text style={{ marginBottom: 15, fontSize: 14, marginTop: 10 }}>
                  <Image
                    source={require("../images/calendar.png")}
                    style={{ resizeMode: "contain", height: 40, width: 40 }}
                  ></Image>
                  {"  "}Birth Date : {date.toDateString()}
                </Text>
              </TouchableOpacity>
            </View> */}
            <View style={{ padding: 10 }}>
              <RadioGroup
                radioButtons={radioButtons}
                onPress={onPressRadioButton}
                layout="row"
              />
            </View>

            <View style={{ marginBottom: 25 }}>
              <FormButton buttonTitle="Submit" onPress={onhandlesubmit} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Adddetails;

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
    marginTop: 50,
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

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 6,
    alignItems: "center",
    backgroundColor: "white",
  },

  text: {
    fontSize: 15,
    color: "red",
    padding: 3,
    marginBottom: 10,
    textAlign: "center",
  },

  // Style for iOS ONLY...
  datePicker: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: 320,
    height: 260,
    display: "flex",
  },

  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
