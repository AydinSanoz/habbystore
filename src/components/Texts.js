import React from 'react';
import {Text, View} from 'react-native';
import {texts} from './styles';

export function Text1({children}) {
  return <Text style={texts.text1}>{children}</Text>;
}
export function Text2({children}) {
  return <Text style={texts.text2}>{children}</Text>;
}
