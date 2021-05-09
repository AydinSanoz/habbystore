import React from 'react';
import {View, Text, Button} from 'react-native';
import {textSign} from './styles';

export default function TextSign(props) {
  return (
    <View style={textSign.wrapper}>
      <View style={textSign.container}>
        <Text>Don't you have an account</Text>
        <Button
          title="SignUp"
          onPress={() => props.navigation.navigate('SignUp')}
        />
      </View>
      <View style={textSign.container}>
        <Text>Did you forgot password</Text>
        <Button title="Forget password" />
      </View>
    </View>
  );
}
