import React from 'react';
import {View, Text} from 'react-native';
import {badge} from './styles';

export default function Badge({children, ...props}) {
  return (
    <View style={badge.container}>
      <Text style={badge.text}>{props.number}</Text>
    </View>
  );
}
