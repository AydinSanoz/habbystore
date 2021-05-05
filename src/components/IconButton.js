import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {iconButton} from './styles';

export function IconButton({children, ...props}) {
  return (
    <TouchableOpacity
      style={[iconButton.container, {alignSelf: props.alignSelf}]}
      onPress={props.onPress}
      onLongPress={props.onLongPress}>
      <Icon
        name={props.name}
        size={25}
        color="#000"
        backgroundColor="transparent"
      />
      {children}
    </TouchableOpacity>
  );
}
