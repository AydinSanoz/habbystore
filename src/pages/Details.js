import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import {ImageCard, Drawer, HeaderText, SearchBar} from '../components';
import HTMLView from 'react-native-htmlview';
import {layout} from '../styles';

export function Details(props) {
  const item = props.route.params.item;
  console.log('🚀 ~ file: Details.js ~ line 10 ~ Details ~ item', item);

  const images = item.images;
  return (
    <SafeAreaView style={layout.container}>
      <View style={layout.container}>
        <SearchBar placeholder="Enter search key" {...props} />
        <ScrollView>
          <HeaderText>{item.name}</HeaderText>
          <ScrollView horizontal>
            {images.map((image, i) => (
              <View key={i}>
                <ImageCard source={image.src} />
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
      </View>
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
