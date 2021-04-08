import {Dimensions, StyleSheet} from 'react-native';

export const layout = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export const home = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const login = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const video = StyleSheet.create({
  content: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.6,
    position: 'relative',
    margin: 10,
  },
});
