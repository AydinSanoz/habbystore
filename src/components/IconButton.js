import React from 'react';
import {View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export function IconButton(props) {
  return (
    <View
      style={{alignSelf: 'center', flexDirection: 'row', alignItems: 'center'}}>
      <Icon.Button
        name={props.name}
        size={30}
        color="#000"
        backgroundColor="transparent"
        onPress={props.onPress}
      />
      {props.children}
    </View>
  );
}
