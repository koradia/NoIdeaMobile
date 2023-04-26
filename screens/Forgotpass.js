import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import axios from 'axios'
import { Url } from '../components/config'

const {width, height}= Dimensions.get('window')
const Forgotpass = ({navigation}) => {

    const [email,setEmail] = useState();
    const [checkEmail, setCheckEmail]=useState();

    const onsendhandle=async(e)=>{
        if(email==null || email!=checkEmail ) alert("something wrong with input")
        else {
            try{
            console.log({role: 2, email});
            const res= await axios.post(Url + "/forgotpass",
             {
                username:email,
                role:2
             },
            )
            alert("email consisiting password has been sent to you successfully please login")
            navigation.navigate("LoginScreen");
            }
            catch(e){
                console.log((e));
            }
               
            
            
           


        }
    }
  return (
    <View>
      <ImageBackground
        source={require("../images/imgbg.jpg")}
        resizeMode="cover"
        style={{ justifyContent: "center" }}
        imageStyle={{
          width: width,
          // opacity: 0.25,
          height: height * 1.1,
          borderRadius: 5,
        }}

       
      >

<View style={{ paddingTop: 120, alignItems: "center" }}>
    <Text style={{fontSize:18, marginBottom:80}}>To Get Your Password</Text>
        <FormInput
          labelValue={checkEmail}
          onChangeText={(userEmail) => setCheckEmail(userEmail)}
          placeholderText="Enter your Username"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        
        
        <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="Re-Enter your Username"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
    <View style={{margin:50}}>
        <FormButton buttonTitle="Send" onPress={onsendhandle} />
        <FormButton buttonTitle="Cancel" onPress={()=> navigation.navigate('LoginScreen')} />
        </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Forgotpass;

const styles = StyleSheet.create({})