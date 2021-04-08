import React from 'react';
import {Image, View} from 'react-native';
import {imageCard} from './styles';
import TitleText from './TitleText';

export function ImageCard({source, text}, props) {
  const src = {uri: source};
  return (
    <View style={imageCard.container}>
      <Image source={src} style={imageCard.img} />
      <TitleText>{text}</TitleText>
    </View>
  );
}
