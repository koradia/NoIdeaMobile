import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';

const {width, height} =Dimensions.get('screen');


const Assessyourself = () => {
    const navigation=useNavigation();
  return (
    <View>
    <TouchableOpacity onPress={() => navigation.navigate("Questionnaire")}>
    <View
      style={{
        alignContent: "center",
        width: width * 0.5,
        height: height * 0.3,
        marginLeft: 20,
      }}
    >
      <ImageBackground
        source={require("../images/bgassess.jpg")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
        imageStyle={{
          width: width * 0.9,
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 12,
            marginBottom: 15,
          }}
        >
          Assess Yourself
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{}}>
            <Text style={{ marginLeft: 20 }}>
              Help us to identify your needs and build a personalised plan
              for you
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Image
              style={{
                marginLeft: 10,

                width: 100,
                height: 100,
                borderRadius: 2,
                marginTop: 0,
                marginBottom: 50,
              }}
              
              source={require("../images/assess.png")}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  </TouchableOpacity></View>
  )
}

export default Assessyourself;

const styles = StyleSheet.create({})