import {Dimensions, Platform, StyleSheet} from 'react-native';

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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.6,
    position: 'relative',
    margin: 10,
  },
});

export const details = StyleSheet.create({
  attributeContainer: {
    flexDirection: 'row',
    borderBottomColor: '#00000040',
    marginTop: 10,
  },
  attributeContent: {
    flex: 1,
  },
  picker: {
    margin: Platform.OS === 'ios' ? -75 : null,
    // marginBottom: Platform.OS === 'ios' ? -75 : null,
    padding: Platform.OS === 'ios' ? 20 : null,
    zIndex: -10,
  },
});
