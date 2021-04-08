import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {ImageCard} from './ImageCard';
import {dCard, title} from './styles';

export function DetailsCard({source}, props) {
  const src = {uri: source};
  return (
    <View style={dCard.container}>
      <ImageCard style={dCard.img} source={src} />
    </View>
  );
}
