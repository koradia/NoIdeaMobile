import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { Url, getToken } from '../components/config';
import axios from 'axios';

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
    <View>
        <View style={{margin:100}}>
      
      </View>
      <View style={{ paddingTop: 0, alignItems: "center" }}>
    <Text style={{fontSize:18, marginBottom:80}}>New Password</Text>

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
     
      <View style={{margin:50}}>
        <FormButton buttonTitle="Set Password" onPress={onsetHandle} />
        </View>
        </View>
    </View>
  )
}

export default Resetpass;

const styles = StyleSheet.create({})