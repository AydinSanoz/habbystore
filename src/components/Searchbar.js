import React from 'react';
import {View, TextInput, Platform} from 'react-native';
import {searchBarStyles} from './styles';

export const SearchBar = props => {
  return (
    <View style={searchBarStyles.container}>
      <TextInput
        style={searchBarStyles.input}
        onChangeText={props.onText}
        placeholder={props.title}
        placeholderTextColor={props.color}
      />
    </View>
  );
};
