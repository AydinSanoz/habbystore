import React from 'react';
import {View, SafeAreaView, KeyboardAvoidingView, Platform} from 'react-native';
import {layout} from '../styles';

export default function Layout(props) {
  return (
    <SafeAreaView style={layout.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <View style={layout.container}>{props.children}</View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
