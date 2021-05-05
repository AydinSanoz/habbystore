import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {input} from './styles';

export default function FieldInput({children, ...props}) {
  return (
    <View style={input.container}>
      <TextInput style={{flex: 1}} {...props}></TextInput>
      {children}
    </View>
  );
}
