import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, Paragraph } from 'react-native-paper';
import { Dimensions } from 'react-native';
import axios from 'axios';
import { Url, getToken } from './config';
import { convertDate } from './Convdate';

const{width,height} =Dimensions.get('screen');

const Noteslist = (props) => {

    const {date, text}=props;


    function getMonthName(monthNumber) {
      const date = new Date();
      date.setMonth(monthNumber - 1);
    
      // Using the browser's default locale.
      return date.toLocaleString([], { month: 'long' });
    }

    const mon= getMonthName(parseInt(date.substring(5, 7)));
  

  return (

      <View style={{ alignItems: "center" }}>
            <Card
            mode='elevated'
              style={{
                margin: 10,
                //marginLeft: 25,
                //marginRight: 25,
                backgroundColor: "#f4ecfd",
                width: width * 0.8,
                borderColor:'black',
                borderWidth:.45
                
                
              }}
            >
              
              <Card.Content>
              {/* <Text style={{textAlign:'right', color:'grey', fontSize:13}}>{date.substring(0, 10)}</Text> */}
              <View style={{flexDirection:'row', borderBottomWidth:1.5, marginBottom:10}}>
              <Text style={{color:'#31075a', fontSize:15, fontWeight:'500', fontFamily:'sans-serif'}}>{date.substring(8, 10)}-{mon}-{date.substring(0, 4)}</Text>
              <Text style={{textAlign:'right', color:'##31075a', fontSize:15,fontWeight:'500', fontFamily:'sans-serif'}}>{'\t\t\t\t\t\t\t\t\t'} {convertDate( date)}</Text>

              </View>
                <Paragraph style={{fontSize:13, color:'#570c9e', letterSpacing:0.3, fontStyle:'italic'}}>{text}</Paragraph>
                
                
              </Card.Content>
            </Card>
          
        </View>
  )
}

export default Noteslist;

const styles = StyleSheet.create({})