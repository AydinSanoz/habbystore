import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {card} from './styles';

export function ImageCard({img}) {
  console.log('🚀 ~ file: ImageCard.js ~ line 6 ~ ImageCard ~ img', img);
  return (
    <View style={card.container}>
      <Image source={{uri: img[0]?.src}} style={card.img} />
    </View>
  );
}
