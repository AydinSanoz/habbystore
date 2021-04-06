import React from 'react';
import {View, Text} from 'react-native';
import {header, title} from './styles';

export default function HeaderText({children}) {
  return (
    <View>
      <Text style={header.text}>{children}</Text>
    </View>
  );
}
