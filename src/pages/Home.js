import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {layout, video} from '../styles';
import {Categories, SearchBar, AboutUs, Motto, VideoComp} from '../components';
import world from '../assets/background.mp4';
import demo from '../assets/solotex.mp4';

export function Home({navigation}) {
  return (
    <SafeAreaView style={layout.container}>
      <View style={layout.container}>
        <SearchBar placeholder="Enter search key" />
        <ScrollView>
          <Categories navigation={navigation} />
          <AboutUs />
          <VideoComp source={demo} />
          <Motto />
          <VideoComp source={world} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
