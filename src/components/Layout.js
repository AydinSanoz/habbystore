import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {layout} from '../styles';

export default function Layout(props) {
  return (
    <SafeAreaView style={layout.container}>
      <View style={layout.container}>{props.children}</View>
    </SafeAreaView>
  );
}
