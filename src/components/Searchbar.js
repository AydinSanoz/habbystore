import * as React from 'react';
import {View, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {handleSearch} from '../redux/reducers';
import {searchBarStyles} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IconButton} from './IconButton';

export const SearchBar = props => {
  const [isVisible, setIsVisible] = React.useState(false);
  const dispatch = useDispatch();

  function handleChange(val) {
    dispatch(handleSearch(val));
  }

  return (
    <View style={searchBarStyles.container}>
      <IconButton name="menu" onPress={() => props.navigation.toggleDrawer()} />
      <IconButton name="search" onPress={() => setIsVisible(!isVisible)} />
      {isVisible ? (
        <>
          <TextInput
            style={searchBarStyles.input}
            onChangeText={handleChange}
            placeholder={props.placeholder}
            placeholderTextColor={props.color}
            onKeyPress={e => console.log(e)}
            autoFocus
          />
          <IconButton name="check" onPress={props.onPress} />
        </>
      ) : (
        props.children
      )}
    </View>
  );
};
