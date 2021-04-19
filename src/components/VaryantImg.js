import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ImageCard} from './Cards';
import {Text1} from './Texts';

export function VaryantImg(props) {
  console.log('🚀 ~ file: VaryantImg.js ~ line 7 ~ VaryantImg ~ props', props);

  return (
    <ScrollView horizontal>
      <ScrollView horizontal>
        {props.images?.map((image, i) => (
          <View key={i}>
            <ImageCard source={image?.src} />
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}
