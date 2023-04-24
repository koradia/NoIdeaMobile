import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Paragraph } from 'react-native-paper'
import { Dimensions } from 'react-native'
import { convertDate } from './Convdate';

const {width,height}= Dimensions.get('screen');

const Chatbox = (props) => {

    const {int, text, time}= props;

    

  return (
    <View>
        {int==1 ? 
    <View style={{alignItems:'flex-start'}}>
      <Card
              style={{
                margin: 10,
                //marginLeft: 25,
                //marginRight: 25,
                backgroundColor: "#f6e2fe",
                width: width * 0.5,
                borderBottomRightRadius:50,
                borderTopLeftRadius:50,
                borderTopRightRadius:50,
                borderBottomLeftRadius:0
              }}
            >
              
              <Card.Content>
                <Paragraph>{text}</Paragraph>
                <Text style={{textAlign:'right', color:'grey', fontSize:13}}>{convertDate(time)}</Text>
              </Card.Content>
            </Card>
    </View> :
    <View style={{alignItems:'flex-end'}}>
      <Card
              style={{
                margin: 10,
                //marginLeft: 25,
                //marginRight: 25,
                backgroundColor: "#f6e2fe",
                width: width * 0.5,
                borderBottomRightRadius:0,
                borderTopLeftRadius:50,
                borderTopRightRadius:50,
                borderBottomLeftRadius:50
              }}
            >
              
              <Card.Content>
                <Paragraph>{text}</Paragraph>
                <Text style={{textAlign:'right', color:'grey', fontSize:13}}>{convertDate(time)}</Text>
              </Card.Content>
            </Card>
    </View>}
    </View>
  )
}

export default Chatbox

const styles = StyleSheet.create({})