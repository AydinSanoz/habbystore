import React from 'react';
import {View, Text} from 'react-native';
import Video from 'react-native-video';
import {video} from '../styles';
import demo from '../assets/video1.mp4';

export function VideoComp(props) {
  return (
    <View>
      <Video source={props.source} resizeMode="cover" style={video.content} />
    </View>
  );
}
