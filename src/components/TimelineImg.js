import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ImageCard} from './Cards';

export function TimelineImg(props) {
  return (
    <ScrollView horizontal>
      {props.images?.map((image, i) => (
        <View key={i}>
          <ImageCard source={image?.src} />
        </View>
      ))}
    </ScrollView>
  );
}
