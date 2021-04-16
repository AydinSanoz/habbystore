import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ImageCard} from './Cards';
import {Text1} from './Texts';

export function VaryantImg(props) {
  console.log('🚀 ~ file: VaryantImg.js ~ line 7 ~ VaryantImg ~ props', props);

  return (
    <ScrollView horizontal>
      <View>
        <ImageCard source={props.image?.src} />
      </View>
    </ScrollView>
  );
}
