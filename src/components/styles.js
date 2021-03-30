import {Dimensions, StyleSheet} from 'react-native';

export const searchBarStyles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#d3b8ae',
    width: Dimensions.get('window').width * 0.8,
    margin: 10,
    alignSelf: 'center',
  },
  input: {
    //null,
  },
});
