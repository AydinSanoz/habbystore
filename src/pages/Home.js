import React from 'react';
import {View, SafeAreaView, ScrollView, Button} from 'react-native';
import {layout, video} from '../styles';
import {SearchBar, AboutUs, Motto, VideoComp, Drawer} from '../components';
import world from '../assets/background.mp4';
import demo from '../assets/solotex.mp4';

export function Home(props) {
  return (
    <SafeAreaView style={layout.container}>
      <View style={layout.container}>
        <SearchBar placeholder="Enter search key" {...props}>
          {<Drawer {...props} />}
        </SearchBar>
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
