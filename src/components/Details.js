import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {DetailCard} from './DetailsCard';
import {ImageCard} from './ImageCard';
import TitleText from './TitleText';
import HTMLView from 'react-native-htmlview';
import HeaderText from './HeaderText';

export function Details({navigation, route}) {
  const item = route.params.item;

  console.log('🚀 ~ file: Details.js ~ line 9 ~ Details ~ item', item);
  const images = item.images;
  return (
    <SafeAreaView>
      <ScrollView>
        <ScrollView horizontal>
          {images.map((image, i) => (
            <View key={i}>
              <ImageCard source={image.src} text={image.name} />
            </View>
          ))}
        </ScrollView>

        <HeaderText>DESCRIPTION</HeaderText>
        <ScrollView>
          <View style={{margin: 10}}>
            <HTMLView value={item.description} stylesheet={styles} />
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  p: {
    textAlign: 'justify',
    fontSize: 20,
  },
  h3: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  li: {
    fontSize: 20,
    textDecorationStyle: 'double',
  },
});
