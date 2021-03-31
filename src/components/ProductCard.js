import React from 'react';
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import {pCard, title} from './styles';

export function ProductCard({item}) {
  return (
    <TouchableOpacity style={pCard.container}>
      <ImageBackground
        style={pCard.img}
        source={{uri: item.images[0].thumbnail}}>
        <Text style={title.text}>{item.name}</Text>
      </ImageBackground>
      {/* ? require('../assets/habby-logo.png') */}
    </TouchableOpacity>
  );
}
