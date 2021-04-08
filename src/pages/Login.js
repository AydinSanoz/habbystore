import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {SearchBar} from '../components';
import {layout} from '../styles';

export function Login(props) {
  return (
    <SafeAreaView style={layout.container}>
      <View style={layout.container}>
        <SearchBar placeholder="Enter search key" {...props} />
        <Text>Login</Text>
      </View>
    </SafeAreaView>
  );
}
