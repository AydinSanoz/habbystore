import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export function IconButton(props) {
  return (
    <TouchableOpacity
      style={[button.container, {alignSelf: props.alignSelf}]}
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

const button = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
