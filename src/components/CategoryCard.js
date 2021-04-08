import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {cCard, title} from './styles';
import TitleText from './TitleText';

// count: 10;
// description: '';
// id: 192;
// image: null;
// name: 'Deri Biye';
// parent: 45;
// permalink: 'https://habby.store/product-category/aksesuarlar/biye/deri-biye/';
// review_count: 0;
// slug: 'deri-biye';

export function CategoryCard(props) {
  const {item, navigation, route} = props;

  return (
    <View style={cCard.container}>
      <TouchableOpacity
        style={cCard.container}
        onPress={() =>
          navigation.navigate('Products', {id: item.id, name: item.name})
        }>
        <ImageBackground
          style={cCard.img}
          source={
            !item.image
              ? require('../assets/habby-logo.png')
              : {uri: item?.image.src}
          }>
          <TitleText>{item?.name}</TitleText>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}
