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
import { Dimensions } from "react-native";
import FormInput from "../components/FormInput";
import DateTimePicker from "@react-native-community/datetimepicker";
import FormButton from "../components/FormButton";
import { RadioGroup } from "react-native-radio-buttons-group";
import Bottombar from "../components/Bottombar";
import { Url, getToken } from "../components/config";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput } from "react-native-paper";
import Editinput from "../components/Editinput";

const { width, height } = Dimensions.get("screen");

const Editprof = ({ navigation }) => {
  //const arr=["man","qwe@gmail.com" , "9874563210", "address",  "66kg", "166cm","23-02-12","1", "B+"]

  const [name, setName] = useState();
  const [phnumber, setPhnumber] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [datePicker, setDatePicker] = useState();
  const [kg, setKg] = useState(null);
  const [ht, setHt] = useState(null);
  const [gen, setGen] = useState();
  //const [date, setDate] = useState(new Date());
  const [bg, setBg] = useState();
  const [age,setAge] =useState(null);
  const [wplace,setWplace] =useState('');
  const [ageplace,setAgeplace] =useState('');
  const [helace,setHeplace] =useState('');



  useEffect(() => {
    
    const renderdetails = async () => {
      const token = await getToken();
      console.log(token);
      const nav = await axios
        .post(
          Url + "/patget/detail",
          {},
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .catch((e) => {
          console.log(e);
        });
      console.log(nav.data);
      setName(nav.data.name);
      setAddress(nav.data.address);
      setPhnumber(nav.data.phone);
      //setDate(nav.data.bdate);
      setEmail(nav.data.email);
      setHt(nav.data.height);
      setKg(nav.data.weight);
      setBg(nav.data.bloodgroup);
      setAge(nav.data.age);
      setHeplace(nav.data.height.toString())
      setAgeplace(nav.data.age.toString())
      //setDate(nav.data.bDate);
      setGen(nav.data.gender);
      setWplace(nav.data.weight.toString())
      // console.log(gen)
    };
    
    
    renderdetails();
    
  
  },[]);

  const fetchgen = () => {
    const radioButtonsData = [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Male",
        selected: false,
        value: "M",
      },
      {
        id: "2",
        label: "Female",
        selected: false,
        value: "F",
      },
    ];
    if (gen == 0) radioButtonsData[1].selected = true;
    else radioButtonsData[0].selected = true;
    return radioButtonsData;
  };

  function showDatePicker() {
    setDatePicker(true);
  }

  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }

  const [radioButtons, setRadioButtons] = useState(fetchgen);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
    //console.log(radioButtonsArray[0].selected==true);
    if (radioButtonsArray[0].selected == true) {
      setGen(1);
    } else {
      setGen(0);
    }
  }

  const onsavehandle = async(e) => {
    e.preventDefault();
    if (
      phnumber == null ||
      address == null ||
      kg == null ||
      ht == null ||
      gen == null ||
      bg == null || 
      age==null
    ) {
      console.log("please complete all the details");
    } else {
      const arr = [name, phnumber, address, email, kg, ht, gen, bg];
      const pid = await AsyncStorage.getItem('PID');
      const result = await axios.post(Url + "/pat/savedetail", {
        pid: pid,
        name,
        phone: phnumber,
        address,
        email,
        photolink: null,
        score: null,
        age,
        gender: gen,
        weight: kg,
        height: ht,
        journal: null,
        bloodgroup:bg,
      }).catch((e)=>console.log(e));
      // console.log(result);
      if (result.status == 200) {
        //console.log(result.data);
        //setId(result.data);
        navigation.navigate("Dashboard");
      }
      else{
        console.log(result.status);
      }
      

    }
  };

  return (
    <View>
      <ScrollView>
        <View>
          <Appbartab />
        </View>
        <View style={{ margin: 20, alignItems: "center", marginTop: 40 }}>
          {/* <View>
            <FormInput
              labelValue={name}
              onChangeText={(userName) => setName(userName)}
              placeholderText="your name"
              iconType="user"
              keyboardType="address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View> */}
          <View>
          <Editinput 
           labelValue={name}
           onChangeText={(userName) => setName(userName)}
           placeholderText="your name"
           iconType="Name"
           keyboardType="address"
           autoCapitalize="none"
           autoCorrect={false}
         />
          </View>
          <View>
            <Editinput
              labelValue={age}
              onChangeText={(userage) => setAge(userage)}
              placeholderText={ageplace}
              iconType="Age"
              keyboardType="phone-pad"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View>
            <Editinput
              labelValue={email}
              onChangeText={(userEmail) => setName(userEmail)}
              placeholderText={email}
              iconType="Mail"
              keyboardType="address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View>
            <Editinput
              labelValue={phnumber}
              onChangeText={(userPhnumber) => setPhnumber(userPhnumber)}
              placeholderText={phnumber}
              iconType="Phone"
              keyboardType="phone-pad"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* <View>
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
            </View> */}
          <View>
            <Editinput
              labelValue={address}
              onChangeText={(useradd) => setAddress(useradd)}
              placeholderText={address}
              iconType="home"
              keyboardType="address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View>
            <Editinput
              labelValue={kg}
              onChangeText={(kg) => setKg(kg)}
              placeholderText={wplace}
              iconType="Weight"
              keyboardType="phone-pad"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View>
            <Editinput
              labelValue={ht}
              onChangeText={(ht) => setHt(ht)}
              placeholderText={helace}
              iconType="Height"
              keyboardType="phone-pad"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
         
          <View>
            <Editinput
              labelValue={bg}
              onChangeText={(userbg) => setBg(userbg)}
              placeholderText={bg}
              iconType="Blood"
              keyboardType="address"
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
                  {"  "}Birth Date : {date.getDate()}
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

          <View style={{ marginBottom: 20, marginTop:10 }}>
            <FormButton buttonTitle="Save" onPress={onsavehandle} />
          </View>
        </View>
      </ScrollView>
      <View style={{ marginTop: 25 }}>
        <Bottombar />
      </View>
    </View>
  );
};

export default Editprof;

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
