import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import {home} from '../styles';

export function Home({navigation}) {
  return (
    <SafeAreaView style={home.container}>
      <View>
        <Text>Home</Text>
        <Button
          title="Go to Products"
          onPress={() => navigation.navigate('Bottom')}
        />
      </View>
    </SafeAreaView>
  );
}
