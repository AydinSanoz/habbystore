import React from 'react';
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
  View,
} from 'react-native';
import {pCard} from './styles';
import TitleText from './TitleText';
import {Rating, AirbnbRating} from 'react-native-ratings';
import Icon from 'react-native-vector-icons/MaterialIcons';

export function ProductsCard(props) {
  const {item, navigation, route} = props;

  function ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }

  return !item.on_sale ? (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {item: item})}>
      {!item.images[0]?.src ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <View style={pCard.container}>
          <ImageBackground
            style={pCard.img}
            source={{uri: item.images[0].thumbnail}}
          />
          <View style={pCard.textContainer}>
            <View style={pCard.textContent}>
              <Text style={pCard.title}>{item.name}</Text>
              <View style={pCard.priceContent}>
                <Text style={pCard.regularPrice}>
                  {item.prices.regular_price} TL
                </Text>
                <Text style={pCard.price}>{item.prices.sale_price} TL</Text>
              </View>
              <View style={pCard.bottom}>
                <Rating
                  type="custom"
                  ratingBackgroundColor="#c8c7c8"
                  // startingValue={item.average_rating}
                  startingValue={3.3}
                  imageSize={20}
                  // onFinishRating={ratingCompleted}
                  style={{paddingVertical: 10}}
                  // showRating
                />
                {!item.review_count && (
                  <Text style={{flex: 1}}>({item.review_count})</Text>
                )}
              </View>
              {item.has_options && (
                <Icon.Button
                  name="expand-more"
                  backgroundColor="#ccc"
                  color="red"
                  onPress={() => alert('hasvariation')}
                />
              )}
            </View>
            <View style={pCard.bottom}>
              <Text style={pCard.quantity}>Quantity:{item.quantity_limit}</Text>
              {item.is_in_stock && (
                <Text style={pCard.stock}>Not in Stock</Text>
              )}
            </View>
          </View>
        </View>
      )}
    </TouchableOpacity>
  ) : null;
}
