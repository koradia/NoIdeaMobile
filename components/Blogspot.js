import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { Button, Card, Paragraph, Title } from "react-native-paper";

const { width, height } = Dimensions.get("screen");
const Blogspot = () => {
  return (
    <View>
      <View>
        <Text
          style={{
            marginLeft: 18,
            marginTop: 20,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Blogspot
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{ flexDirection: "row", padding: 5 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            flex: 1,
            padding: 10,
            width: width * 0.8,
            height: height * 0.25,
            marginRight: 10,
          }}
        >
          <ImageBackground
            source={require("../images/meditate.jpg")}
            resizeMode="cover"
            style={{ flex: 1, justifyContent: "center" }}
            imageStyle={{
              width: width * 0.8,
              opacity: 0.55,
              borderRadius: 20,
            }}
          >
            <Text style={{ fontSize: 15, padding: 10 }}>
              Meditation can give you a sense of calm, peace and balance that
              can benefit both your emotional well-being and your overall
              health.
            </Text>
          </ImageBackground>
        </View>

       

        <View
          style={{
            flex: 1,
            padding: 10,
            width: width * 0.8,
            height: height * 0.25,
            marginRight: 10,
          }}
        >
          <ImageBackground
            source={require("../images/yoga.jpg")}
            resizeMode="cover"
            style={{ flex: 1, justifyContent: "center" }}
            imageStyle={{
              width: width * 0.8,
              opacity: 0.45,
              borderRadius: 20,
            }}
          >
            <Text style={{ fontSize: 15, padding: 10 }}>
              As a form of low-impact exercise, yoga has been shown to lower
              stress hormones in our bodies . These feel-good chemicals help
              decrease anxiety and improve mood.
            </Text>
          </ImageBackground>
        </View>

        <View
          style={{
            flex: 1,
            padding: 10,
            width: width * 0.8,
            height: height * 0.25,
          }}
        >
          <ImageBackground
            source={require("../images/read.jpg")}
            resizeMode="cover"
            style={{ flex: 1, justifyContent: "center" }}
            imageStyle={{
              width: width * 0.8,
              opacity: 0.45,
              borderRadius: 20,
            }}
          >
            <Text style={{ fontSize: 15, padding: 10 }}>
              Reading can even relax your body by lowering your heart rate and
              easing the tension in your muscles.
            </Text>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
};

export default Blogspot;

const styles = StyleSheet.create({});
