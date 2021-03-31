import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {layout} from '../styles';
import {Categories, Product} from '../components';

export function Welcome({navigation}) {
  return (
    <SafeAreaView style={layout.container}>
      <View style={layout.container}>
        <Categories navigation={navigation} />
        <Product navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}
