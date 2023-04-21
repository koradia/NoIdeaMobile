import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, Paragraph } from 'react-native-paper';
import { Dimensions } from 'react-native';
import axios from 'axios';
import { Url, getToken } from './config';

const{width,height} =Dimensions.get('screen');

const Noteslist = (props) => {

    const {date, text}=props;

   
  

  return (

      <View style={{ alignItems: "center" }}>
            <Card
              style={{
                margin: 10,
                //marginLeft: 25,
                //marginRight: 25,
                backgroundColor: "#f6e2fe",
                width: width * 0.8,
                
              }}
            >
              
              <Card.Content>
                <Paragraph>{text}</Paragraph>
                <Text style={{textAlign:'right', color:'grey', fontSize:13}}>{date}</Text>
              </Card.Content>
            </Card>
          
          <Text>{"\n"}</Text>
        </View>
  )
}

export default Noteslist;

const styles = StyleSheet.create({})