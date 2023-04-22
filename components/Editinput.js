import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import {windowHeight, windowWidth} from './Dimensions';
import { Dimensions } from 'react-native';


import AntDesign from 'react-native-vector-icons/AntDesign';

const {width,height}=Dimensions.get('screen');

const Editinput = ({labelValue, placeholderText, iconType, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
    <View style={styles.iconStyle}>
      <Text>{iconType}</Text>
    </View>
    <TextInput
      value={labelValue}
      style={styles.input}
      numberOfLines={1}
      placeholder={placeholderText}
      placeholderTextColor="#666"
      
      {...rest}
    />
  </View>
  )
}

export default Editinput;

const styles = StyleSheet.create({
    inputContainer: {
      marginTop: 5,
      marginBottom: 10,
      width: width*.80,
      height: windowHeight / 18,
      //borderColor: '#F8EDE3',
      borderBottomColor:'#402218',
      borderRadius: 3,
      
      borderBottomWidth: 2,
      flexDirection: 'row',
      alignItems: 'center',
      //backgroundColor: '#F8EDE3',
    },
    iconStyle: {
      padding: 10,
      paddingBottom:5,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRightColor: '#402218',
      borderRightWidth: 1,
      width: 80,
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