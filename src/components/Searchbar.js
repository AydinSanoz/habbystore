import * as React from 'react';
import {View, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {handleSearch} from '../redux/searchReducer';
import {searchBarStyles} from './styles';
import {IconButton} from './IconButton';
import Badge from './Badge';

export const SearchBar = ({children, ...props}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const dispatch = useDispatch();
  const {value} = useSelector(state => state.search);
  const {data} = useSelector(state => state.basket);
  function handleChange(val) {
    dispatch(handleSearch(val));
  }
  return (
    <View style={searchBarStyles.container}>
      <IconButton name="menu" onPress={() => props.navigation.toggleDrawer()} />
      <IconButton
        flex={1}
        name="search"
        onPress={() => {
          setIsVisible(!isVisible);
          handleChange('');
        }}
      />
      {isVisible ? (
        <>
          <TextInput
            style={searchBarStyles.input}
            onChangeText={handleChange}
            placeholder="Enter a search key"
            placeholderTextColor={props.color}
            onKeyPress={e => console.log(e)}
            value={value}
            autoFocus
          />
          <IconButton name="ios-checkmark-sharp" onPress={props.onPress} />
          {children}
        </>
      ) : (
        <>
          <IconButton
            name="basket"
            alignSelf="flex-end"
            onPress={() => props.navigation.navigate('Card')}
          />
          <Badge number={data.length} />
        </>
      )}
    </View>
  );
};
