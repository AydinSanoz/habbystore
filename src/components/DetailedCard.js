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

export function DetailedCard({item}) {
  console.log(
    '🚀 ~ file: DetailedCard.js ~ line 11 ~ DetailedCard ~ item',
    item.images[0].src,
  );
  return (
    <TouchableOpacity style={dCard.container}>
      {item.images.map(image => (
        <>
          <ScrollView key={(_, index) => index.toString()} horizontal>
            <Image style={dCard.img} source={{uri: image.src}} />
          </ScrollView>
          <Text style={title.text}>{item.name}</Text>
        </>
      ))}
    </TouchableOpacity>
  );
}
