import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HTMLView from 'react-native-htmlview';
import {Rating} from 'react-native-ratings';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActivityRoller from './ActivityRoller';
import {dCard, pCard, cCard, imageCard} from './styles';
import {Text1, Text2} from './Texts';
import TitleText from './TitleText';

export function ImageCard({source, text}) {
  const src = {uri: source};
  return (
    <View style={imageCard.container}>
      <Image source={src} style={imageCard.img} />
      <TitleText>{text}</TitleText>
    </View>
  );
}
export function ListCard(props) {
  const {id, name, count, parent, navigation, route} = props;

  return (
    <View>
      <TouchableOpacity style={cCard.container} onPress={props.onPress}>
        <Text1>{name}</Text1>
        <Text2>{count}</Text2>
      </TouchableOpacity>
    </View>
  );
}
export function DetailedCard(props) {
  const {item} = props;
  console.log('🚀 ~ file: Cards.js ~ line 50 ~ DetailedCard ~ item', item);

  return (
    <View>
      <TouchableOpacity style={cCard.container} onPress={() => null}>
        <ImageBackground
          style={cCard.img}
          source={
            require('../assets/habby-logo.png')
            // {uri: item.image.src}
          }>
          {props.children}
        </ImageBackground>
        {/* <Text style={{fontSize: 15, padding: 5}}>{category?.name}</Text> */}
      </TouchableOpacity>
      {null}
    </View>
  );
}
export function ProductsCard({item, navigation, route}) {
  console.log('🚀 ~ file: Cards.js ~ line 79 ~ ProductsCard ~ item', item);
  function ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }
  const image = item.images[0];
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {item: item})}>
      {item.length > 0 ? (
        <ActivityRoller />
      ) : (
        <View style={pCard.container}>
          <Image style={pCard.img} source={{uri: image?.src}} />

          <View style={pCard.textContainer}>
            {/* <View style={pCard.textContent}> */}
            <Text style={pCard.title}>{item.name}</Text>
            <View style={pCard.priceContent}>
              {/* <Text style={pCard.regularPrice}>{item.regular_price} TL</Text>
              <Text style={pCard.price}>{item.sale_price} TL</Text> */}

              <HTMLView style={pCard.price}>{item.price_html}</HTMLView>
            </View>
            <View style={pCard.ratingContent}>
              {!item.review_count > 0 && (
                <View style={pCard.rating}>
                  <Rating
                    type="star"
                    ratingBackgroundColor="#c8c7c8"
                    // startingValue={item.average_rating}
                    startingValue={2.5}
                    imageSize={20}
                    // onFinishRating={ratingCompleted}
                    style={{paddingVertical: 10}}
                    // showRating
                  />
                  <Text>({item.rating_count})</Text>
                </View>
              )}
              {item.has_options && (
                <Icon.Button
                  name="menu"
                  size={20}
                  color="red"
                  borderRadius={99}
                  // backgroundColor="#ddd"
                  backgroundColor="transparent"
                  onPress={() => alert('hasOption')}
                />
              )}
            </View>
            {/* </View> */}
            <View style={pCard.bottom}>
              {item.stock_status !== 'inStock' ? (
                <Text style={pCard.quantity}>
                  Quantity:{item.stock_quantity}
                </Text>
              ) : (
                <Text style={pCard.stock}>Not in Stock</Text>
              )}
            </View>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}
export function DetailsCard({source}, props) {
  const src = {uri: source};
  return (
    <View style={dCard.container}>
      <ImageCard style={dCard.img} source={src} />
    </View>
  );
}
