import React from 'react';
import {View, SafeAreaView, ScrollView, Button} from 'react-native';
import {layout, video} from '../styles';
import {Categories, SearchBar, AboutUs, Motto, VideoComp} from '../components';
import world from '../assets/background.mp4';
import demo from '../assets/solotex.mp4';
import {DrawerActions} from '@react-navigation/routers';

export function Home(props) {
  return (
    <SafeAreaView style={layout.container}>
      <View style={layout.container}>
        <SearchBar placeholder="Enter search key" {...props} />
        <ScrollView style={{margin: 10}}>
          <AboutUs {...props} />
          {/* <VideoComp source={demo} /> */}
          <Motto />
          <VideoComp source={world} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
