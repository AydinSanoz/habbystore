import React from 'react';
import {View, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export function IconButton(props) {
  return (
    <TouchableOpacity
      style={{alignSelf: 'center', flexDirection: 'row', alignItems: 'center'}}
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
