import React from 'react';
import {View, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {handleSearch} from '../redux/search';
import {Drawer} from './Drawer';
import {searchBarStyles} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const SearchBar = props => {
  const dispatch = useDispatch();

  function handleChange(val) {
    dispatch(handleSearch(val));
  }

  return (
    <View style={searchBarStyles.container}>
      <Icon.Button
        name="search"
        size={30}
        color="#00000050"
        backgroundColor="transparent"
      />
      <TextInput
        style={searchBarStyles.input}
        onChangeText={handleChange}
        placeholder={props.placeholder}
        placeholderTextColor={props.color}
      />
    </View>
  );
};
