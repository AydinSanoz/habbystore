import React from 'react';
import {Text} from 'react-native';
import {texts, title} from './styles';

export function Error({children}) {
  return <Text style={texts.error}>{children}</Text>;
}
