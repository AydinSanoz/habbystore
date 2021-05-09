import React from 'react';
import {Dimensions, ImageBackground} from 'react-native';

export default function Logo({children, ...props}) {
  const width = Dimensions.get('window').width;
  return (
    <ImageBackground
      source={require('../assets/habby-logo.png')}
      style={{width: width, height: 200}}
      resizeMode="center"
    />
  );
}
