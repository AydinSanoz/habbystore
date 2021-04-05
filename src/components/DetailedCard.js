import React from 'react';
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
  Image,
  View,
  ScrollView,
} from 'react-native';
import {dCard, title} from './styles';

export function DetailedCard({item, navigation}) {
  return (
    <TouchableOpacity style={dCard.container}>
      {!item.images[0]?.thumbnail ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <ImageBackground
          style={dCard.img}
          source={{uri: item.images[0].thumbnail}}>
          <Text style={title.text}>{item.name}</Text>
        </ImageBackground>
      )}
    </TouchableOpacity>
  );
}
