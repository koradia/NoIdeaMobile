import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Login from './screens/Login';
import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import LoginScreen from './screens/Login';
import { Button } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/Signupscreen';
import Adddetails from './screens/Adddetails';
import Dashboard from './screens/Dashboard';
import Questionnaire from './screens/Questionnaire';
import Taskmanager from './screens/Taskmanager';
import Startscrn from './screens/Startscrn';
import Startscrn2 from './screens/Startscrn2';
import Startscrn3 from './screens/Startscrn3';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import Bottombar from './components/Bottombar';
import LoadingScreen from './screens/LoadingScreen';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import Userprof from './screens/Userprof';
import Doctorinfo from './screens/Doctorinfo';
import Editprof from './screens/Editprof';
import Journalscrn from './screens/Journalscrn';
import Videoscrn from './screens/Videoscrn';
import Audioscrn from './screens/Audioscrn';
import Forgotpass from './screens/Forgotpass';
import Resetpass from './screens/Resetpass';
import Chatscrn from './screens/Chatscrn';
import Browse from './screens/Browse';

const Stack = createNativeStackNavigator();



const screenOptions={
  headerShown:false,

};


export default function App({navigation}) {



 

  const handleini=()=>{
    if(loggedin==true) return ('Dashboard');
    else return ('Login');
  }

  return  (

    <NavigationContainer>

      <Stack.Navigator screenOptions={screenOptions} initialRouteName='LoadingScreen'>
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
          <Stack.Screen name= "Dashboard" component={Dashboard} />
          <Stack.Screen name= "Doctorinfo" component={Doctorinfo} />
          <Stack.Screen name="Startscrn" component={Startscrn} />
          <Stack.Screen name="Startscrn2" component={Startscrn2}/>
          <Stack.Screen name='Startscrn3' component={Startscrn3} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name= "Adddetails" component={Adddetails} />
          <Stack.Screen name= "Signup" component={SignupScreen} initialParams={'key'} />
          <Stack.Screen name= "Questionnaire" component={Questionnaire} />
          <Stack.Screen name= "Taskmanager" component={Taskmanager} />
          <Stack.Screen name='Editprof' component={Editprof} />
          <Stack.Screen name='Userprof' component={Userprof} />
          <Stack.Screen name='Journalscrn' component={Journalscrn} />
          <Stack.Screen name='Videoscrn' component={Videoscrn} />
          <Stack.Screen name='Audioscrn' component={Audioscrn} />
          <Stack.Screen name='Forgotpass' component={Forgotpass} />
          <Stack.Screen name='Resetpass' component={Resetpass} />
          <Stack.Screen name='Chatscrn' component={Chatscrn} />
          <Stack.Screen name='Browse' component={Browse} />
           </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
