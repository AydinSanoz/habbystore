import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {layout} from '../styles';
import {Categories, Product, SearchBar} from '../components';

export function Welcome({navigation}) {
  const [text, setText] = useState('');
  function handleChange(val) {
    setText(val);
  }
  return (
    <SafeAreaView style={layout.container}>
      <View style={layout.container}>
        <SearchBar placeholder="Enter search key" onChangeText={handleChange} />
        <Categories navigation={navigation} />
        <Product navigation={navigation} search={text} />
      </View>
    </SafeAreaView>
  );
}
