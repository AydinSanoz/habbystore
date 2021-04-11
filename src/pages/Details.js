import React from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {ImageCard, HeaderText, SearchBar, IconButton} from '../components';
import HTMLView from 'react-native-htmlview';
import {layout} from '../styles';
import Layout from '../components/Layout';

export function Details(props) {
  const item = props.route.params.item;
  const images = item.images;

  return (
    <Layout>
      <SearchBar placeholder="Enter search key" {...props}>
        <IconButton
          name="keyboard-arrow-left"
          onPress={() => props.navigation.goBack()}
          {...props}
        />
      </SearchBar>
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
    </Layout>
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
