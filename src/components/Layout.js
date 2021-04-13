import React from 'react';
import {View, Text, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import {layout} from '../styles';

export default function Layout(props) {
  return (
    <SafeAreaView style={layout.container}>
      <View style={layout.container}>
        <KeyboardAvoidingView>{props.children}</KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}
