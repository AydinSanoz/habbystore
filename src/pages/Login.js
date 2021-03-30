import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {login} from '../styles';

export function Login(props) {
  return (
    <SafeAreaView style={login.container}>
      <View>
        <Text>Login</Text>
      </View>
    </SafeAreaView>
  );
}
