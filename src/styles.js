import {Dimensions, Platform, StyleSheet} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const layout = StyleSheet.create({
  container: {
    flex: 1,
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
    width: width,
    height: width * 0.6,
    position: 'relative',
    margin: 10,
  },
});

export const details = StyleSheet.create({
  attributeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#00000040',
    margin: 10,
  },
  attributeContent: {
    flex: 1,
  },
});
