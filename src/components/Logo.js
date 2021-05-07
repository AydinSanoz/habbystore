import React from 'react';
import {ImageBackground} from 'react-native';

export default function Logo({children, ...props}) {
  return (
    <ImageBackground
      source={require('../assets/habby-logo.png')}
      style={{width: 400, height: 200, backgroundColor: '#111111'}}
      resizeMode="center"
    />
  );
}
