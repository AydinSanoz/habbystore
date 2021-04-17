import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {details} from '../styles';

export function PickerComp(props) {
  const {attributes, attributeIndex, selectedValue, onValueChange} = props;

  return (
    <View>
      <Picker
        style={details.picker}
        mode="dropdown"
        enabled={true}
        selectedValue={selectedValue}
        onValueChange={onValueChange}>
        {attributes[attributeIndex].options.map((option, i) => (
          <Picker.Item key={i} label={option} value={option} />
        ))}
      </Picker>
    </View>
  );
}
