import React from 'react';
import {View, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {handleSearch} from '../redux/search';
import {searchBarStyles} from './styles';

export const SearchBar = props => {
  const dispatch = useDispatch();

  function handleChange(val) {
    dispatch(handleSearch(val));
  }

  return (
    <View style={searchBarStyles.container}>
      <TextInput
        style={searchBarStyles.input}
        onChangeText={handleChange}
        placeholder={props.placeholder}
        placeholderTextColor={props.color}
      />
    </View>
  );
};
