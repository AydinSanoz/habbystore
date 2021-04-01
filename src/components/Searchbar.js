import React from 'react';
import {View, TextInput, Platform} from 'react-native';
import {searchBarStyles} from './styles';

export const SearchBar = props => {
  return (
    <View style={searchBarStyles.container}>
      <TextInput
        style={searchBarStyles.input}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor={props.color}
      />
    </View>
  );
};
