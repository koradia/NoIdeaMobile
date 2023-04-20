import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Card, Paragraph } from 'react-native-paper';
import { Dimensions } from 'react-native';

const{width,height} =Dimensions.get('screen');

const Noteslist = () => {

    const arr =[['qwertyqwer', '12-08-2021'], ['asdfghj', '28-02-2065'],['zxcvbnm', '78-62-2025']];

    // useeffect 
    useEffect(()=>{
      const onscreen=()=>{

      }


      onscreen();
    })

  return (
    <View>
    <ScrollView>
      <View style={{ alignItems: "center" }}>
          {arr.map((e) => (
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
                <Paragraph>{e[0]}</Paragraph>
                <Text style={{textAlign:'right', color:'grey', fontSize:13}}>{e[1]}</Text>
              </Card.Content>
            </Card>
          ))}
          <Text>{"\n"}</Text>
        </View>
      </ScrollView>
      </View>
  )
}

export default Noteslist;

const styles = StyleSheet.create({})