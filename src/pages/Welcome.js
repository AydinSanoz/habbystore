import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {layout} from '../styles';
import {Categories, SearchBar} from '../components';
import {VideoPlayer} from '../components/VideoPlayer';

export function Welcome({navigation}) {
  return (
    <SafeAreaView style={layout.container}>
      <View style={layout.container}>
        <SearchBar placeholder="Enter search key" />
        <Categories navigation={navigation} />
        <VideoPlayer />
      </View>
    </SafeAreaView>
  );
}
