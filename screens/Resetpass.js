import { ImageBackground, StyleSheet, Text, View , ScrollView} from 'react-native'
import React, { useState } from 'react'
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { Url, getToken } from '../components/config';
import axios from 'axios';
import { Dimensions } from 'react-native';
import Userprof from './Userprof';

const {width,height}= Dimensions.get('screen');

const Resetpass = ({navigation}) => {

    const [currpass, setCurrpass] =useState();
    const[pass, setPass]=  useState();
    const[checkpass, setCheckpass]= useState();

    const onsetHandle=async(e)=>{
        e.preventDefault();
        if( currpass==null || pass==null || pass!=checkpass) alert('something went wrong');
        else{
            const token= await getToken();
            // console.log({currentpwd:currpass,
            //     newpwd:pass,
            //     role:2});
            try{
            const res = await axios.post(Url + "/pat/resetpwd",
            {
                currentpwd:currpass,
                newpwd:pass,
                role:2

            },{headers:{
                "Authorization": token,
              }}
              )
              
              alert('New Password has been set');
              navigation.navigate('Dashboard');
              
            }
            catch(e){
                console.log(e);
                alert('wrong password');
            }
            
        } 

    }

  return (
    <ScrollView>
       <ImageBackground
            source={require('../images/imgbg.jpg')}
            resizeMode="cover"
            style={{ justifyContent: "center" }}
            imageStyle={{
            width: width,
           // opacity: 0.25,
           height:height,
            borderRadius: 5,
            }}
        >
          
     <View style={{marginTop:200, alignItems:'center', marginBottom:40}}><Text style={{color:'maroon', fontSize:20}} >Set Your New Password</Text></View>
       
      <View style={{ paddingTop: 50, alignItems: "center" }}>

    <FormInput
          labelValue={currpass}
          onChangeText={(userEmail) => setCurrpass(userEmail)}
          placeholderText="Enter your Current Password"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          labelValue={pass}
          onChangeText={(userEmail) => setPass(userEmail)}
          placeholderText="Enter your New Password"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        
        
        <FormInput
          labelValue={checkpass}
          onChangeText={(userEmail) => setCheckpass(userEmail)}
          placeholderText="Re-Enter your Password"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
     
      <View style={{margin:50, flexDirection:'column',justifyContent:'space-between',marginBottom:180}}>
        <FormButton buttonTitle="Set Password" onPress={onsetHandle} />
        <FormButton buttonTitle="Cancel" onPress={()=>navigation.navigate(Userprof)} />
        </View>
        </View>
        </ImageBackground>
    </ScrollView>
  )
}

export default Resetpass;

const styles = StyleSheet.create({})