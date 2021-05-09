import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {iconButton} from './styles';
import {Text1} from './Texts';

export function IconButton({
  children,
  text,
  name,
  onPress,
  onLongPress,
  ...props
}) {
  return (
    <TouchableOpacity
      style={[iconButton.container, {flex: props.flex}]}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text1>{text}</Text1>
      <Icon name={name} size={25} color="#000" backgroundColor="transparent" />
      {children}
    </TouchableOpacity>
  );
}
