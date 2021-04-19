import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {iconButton} from './styles';

export function IconButton(props) {
  return (
    <TouchableOpacity
      style={[iconButton.container, {alignSelf: props.alignSelf}]}
      onPress={props.onPress}
      onLongPress={props.onLongPress}>
      <Icon
        name={props.name}
        size={30}
        color="#000"
        backgroundColor="transparent"
      />
      {props.children}
    </TouchableOpacity>
  );
}
