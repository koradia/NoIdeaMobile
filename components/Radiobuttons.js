import * as React from 'react';
import { View , Text} from 'react-native';
import {RadioButton} from 'react-native-paper';
import RadioGroup from 'react-native-radio-buttons-group';
import { useState } from 'react';
const radioButtonsData = [{
  id: '1', // acts as primary key, should be unique and non-empty string
  label: 'Male',
  value: 'M'
}, {
  id: '2',
  label: 'Female',
  value: 'F'
}]

export default function Radio() {

  const [radioButtons, setRadioButtons] = useState(radioButtonsData)

  function onPressRadioButton(radioButtonsArray) {
      setRadioButtons(radioButtonsArray);
  }

  return (
      <RadioGroup
          radioButtons={radioButtons} 
          onPress={onPressRadioButton} 
          layout='row'
      />
  );

}