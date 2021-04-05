import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {cCard, title} from './styles';

// count: 10;
// description: '';
// id: 192;
// image: null;
// name: 'Deri Biye';
// parent: 45;
// permalink: 'https://habby.store/product-category/aksesuarlar/biye/deri-biye/';
// review_count: 0;
// slug: 'deri-biye';

export function CategoryCard({item, navigation}) {
  return (
    <View style={cCard.container}>
      <TouchableOpacity
        style={cCard.container}
        onPress={() => navigation.navigate('Details', {id: item.id})}>
        <ImageBackground
          style={cCard.img}
          source={
            !item.image
              ? require('../assets/habby-logo.png')
              : {uri: item?.image.src}
          }>
          <Text style={title.text}>{item?.name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}
