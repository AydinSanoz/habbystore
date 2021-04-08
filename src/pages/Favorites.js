import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {SearchBar} from '../components';
import {layout} from '../styles';

export function Favorites(props) {
  return (
    <SafeAreaView style={layout.container}>
      <View style={layout.container}>
        <SearchBar placeholder="Enter search key" {...props} />
        <Text>Favorites</Text>
      </View>
    </SafeAreaView>
  );
}
