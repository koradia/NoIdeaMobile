import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Journal = () => {

  const navigation =useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('Journalscrn')}>
              <View style={{alignItems:'center'}}>
              
              <ImageBackground
                style={{
                  width: 250,
                  height: 250,
                  
                  marginTop: 20,
                  marginBottom: 20,
                }}
                source={require("../images/agenda.png")}
              >

                <Text style={{textAlign:'center',marginTop:85, marginLeft:50, fontWeight:'bold', fontSize:15}}>Krutik's</Text>
                <Text style={{textAlign:'center',marginLeft:40,fontSize:15, fontWeight:'bold' }}>Journal</Text>
                <Text style={{textAlign:'center', marginTop:60, marginLeft:20, color:'white'}}>Tap to Begin</Text>
              </ImageBackground>
              
              
              </View>
              </TouchableOpacity>
    </View>
  )
}

export default Journal;

const styles = StyleSheet.create({})