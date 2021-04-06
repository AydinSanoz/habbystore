import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import {home} from '../styles';
import {SearchContext} from '../redux/store';

export function Test({navigation}) {
  return (
    <SafeAreaView style={home.container}>
      <View style={home.container}>
        <Text>Home</Text>
        <Button
          title="Go to Products"
          onPress={() => navigation.navigate('Bottom')}
        />
      </View>
    </SafeAreaView>
  );
}
