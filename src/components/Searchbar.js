import * as React from 'react';
import {View, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {handleSearch} from '../redux/reducers';
import {searchBarStyles} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const SearchBar = props => {
  const [isVisible, setIsVisible] = React.useState(false);
  const dispatch = useDispatch();

  function handleChange(val) {
    dispatch(handleSearch(val));
  }

  return (
    <View style={searchBarStyles.container}>
      <Icon.Button
        name="menu"
        size={30}
        color="#000"
        backgroundColor="#fafafa"
        onPress={() => props.navigation.toggleDrawer()}
      />
      <Icon.Button
        name="search"
        size={30}
        onPressIn={e => console.log(e)}
        color="#000"
        backgroundColor="#fafafa"
        onPress={() => setIsVisible(!isVisible)}
      />
      {isVisible ? (
        <TextInput
          style={searchBarStyles.input}
          onChangeText={handleChange}
          placeholder={props.placeholder}
          placeholderTextColor={props.color}
          onKeyPress={e => console.log(e)}
          auto
          autoFocus
        />
      ) : (
        props.children
      )}
    </View>
  );
};
