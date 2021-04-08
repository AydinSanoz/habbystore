import {DrawerActions} from '@react-navigation/routers';
import React from 'react';
import {View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export function Drawer(props) {
  return (
    <View style={{alignSelf: 'flex-start'}}>
      <Icon.Button
        name="menu"
        size={30}
        color="#000"
        backgroundColor="#fff"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </View>
  );
}
