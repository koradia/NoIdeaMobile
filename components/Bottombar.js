import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {Appbar, FAB, useTheme} from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import  Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../screens/LoginScreen';
import { useNavigation } from '@react-navigation/native';
import { NavigationAction } from '@react-navigation/native';
import Userprof from '../screens/Userprof';

const{width, height} =Dimensions.get('screen');
const BOTTOM_APPBAR_HEIGHT = height*.05;
const MEDIUM_FAB_HEIGHT = width;


const Bottombar = ({LoginScreen}) => {

  const navigation= useNavigation();
  
  return (
    //  

    <View
      style={{
        flexDirection: "row",
        width:width,
        padding:0,
        justifyContent: "space-between",
        backgroundColor:'#222831',
        paddingLeft:30,
        paddingRight:30,
        paddingTop:10,
        height:height*.06,
      }}
    >
        <TouchableOpacity onPress={() => {navigation.navigate('Dashboard')}}>

      <Ionicons
          name='home-outline'
          size={25}
          color="white"
        />
        </TouchableOpacity>
     
      {/* <Icon icon="shopping-bag" text="" /> */}
      {/* <TouchableOpacity onPress={() => {}}>

      <Ionicons
          name='logo-react'
          size={25}
          color="white"
        />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => {}}>

      <Ionicons
          name='md-chatbox-ellipses-outline'
          size={25}
          color="white"
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>navigation.navigate('Journalscrn')}>
      <Ionicons
          name='md-book-outline'
          size={25}
          color="white"
        />
        </TouchableOpacity>
      {/* <Icon icon="receipt" text="Orders" /> */}
      <TouchableOpacity onPress={()=>navigation.navigate('Userprof')}>
        <Ionicons
          name='settings-outline'
          size={25}
          color="white"
        />
        </TouchableOpacity>
    </View>
  );
};

export default Bottombar;

const styles = StyleSheet.create({
    bottom: {
        backgroundColor: 'C9D6DF',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
      },
      fab: {
        position: 'absolute',
        right: 16,
      },
})