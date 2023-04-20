import React from 'react';
import {Text,View, TouchableOpacity, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from './Dimensions';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const {width,height}=Dimensions.get('screen');


const FormButton = ({buttonTitle, ...rest}) => {
  return (
    
      
    <TouchableOpacity  style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  )
     
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: width*.5,
    height: height*.057,
    backgroundColor:'#bfa6e2' ,
    
    borderWidth:0,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
   
    
  },
  buttonText: {
    fontSize: 15,
    fontFamily:'sans-serif-condensed',
    fontWeight: 'bold',
    color: '#201135',
    // fontFamily: 'Lato-Regular',
    //paddingBottom:10
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 55,
    paddingRight: 55,
    //paddingBottom:5,
    paddingTop:0,
    height:100,
    width:200,
    //marginBottom:height*.002,
    borderRadius: 5
  },
});