import React from 'react';
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import {dCard, title} from './styles';
import TitleText from './TitleText';

export function ProductsCard({item, navigation}) {
  return (
    <TouchableOpacity
      style={dCard.container}
      onPress={() => navigation.navigate('Details', {item})}>
      {!item.images[0]?.src ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <ImageBackground
          style={dCard.img}
          source={{uri: item.images[0].thumbnail}}>
          <TitleText>{item.name}</TitleText>
        </ImageBackground>
      )}
    </TouchableOpacity>
  );
}
