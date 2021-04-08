import React from 'react';
import {View, Text} from 'react-native';
import {header} from './styles';

export function HeaderText(props) {
  return (
    <View style={header.container}>
      <Text style={header.text}>{props.children}</Text>
    </View>
  );
}
