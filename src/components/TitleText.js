import React from 'react';
import {View, Text} from 'react-native';
import {title} from './styles';

export default function TitleText({children}) {
  return (
    <View style={title.container}>
      <Text style={title.text}>{children}</Text>
    </View>
  );
}
