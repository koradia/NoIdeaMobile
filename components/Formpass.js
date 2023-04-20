import React, { useState } from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {windowHeight, windowWidth} from './Dimensions';
import { Dimensions } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';


const {width,height}=Dimensions.get('screen');

const Formpass = ({labelValue, placeholderText, iconType, ...rest}) => {
  
    const [icontType1,seticonType1]=useState('eyeo');
    const[passwordvis,setPasswordvis]=useState(true);
    
    const handleeye=()=>{
        if(icontType1=='eyeo')
        { seticonType1('eye');
            setPasswordvis(false);
        }
        else{
            seticonType1('eyeo');
            setPasswordvis(true);
        }
    
    };
  
  
  
    return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <AntDesign name={iconType} size={20} color="#402218" />
      </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        secureTextEntry={passwordvis}
        
        {...rest}
        
      />
      <TouchableOpacity onPress={handleeye}>
      <View style={styles.iconStyle1}>
        <AntDesign name={icontType1} size={20} color="#402218" />
      </View>
      </TouchableOpacity>
    </View>
  );
};

export default Formpass;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: width*.80,
    height: windowHeight / 18,
    borderColor: '#F8EDE3',
    borderBottomColor:'#402218',
    borderRadius: 3,
    borderBottomWidth:2,
    flexDirection: 'row',
    alignItems: 'center',
   // backgroundColor: '#F8EDE3',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#402218',
    borderRightWidth: 1,
    width: 50,
  },
  iconStyle1: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // borderRightColor: '#402218',
    // borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 15,
    // fontFamily: 'Lato-Regular',
    color: '#402218',
    justifyContent: 'center',
    alignItems: 'center',
    
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