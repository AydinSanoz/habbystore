import {Dimensions, StyleSheet, Platform} from 'react-native';

export const searchBarStyles = StyleSheet.create({
  container: {
    padding: Platform.OS == 'ios' ? 10 : 5,
    borderRadius: 10,
    backgroundColor: '#81d4fa',
    width: Dimensions.get('window').width * 0.95,
    alignSelf: 'center',
    marginBottom: 10,
  },
  input: {
    fontSize: 20,
  },
});
export const pCard = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#c3fdff',
    width: Dimensions.get('window').width * 0.45,
    margin: 10,
  },
  img: {
    height: 250,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
  },
});
export const cCard = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
  },
  img: {
    resizeMode: 'contain',
    width: 300,
    height: 150,
    justifyContent: 'flex-end',
  },
});
export const dCard = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#c3fdff',
    margin: 10,
  },
  img: {
    height: 250,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
  },
});
export const category = StyleSheet.create({
  container: {
    borderBottomColor: '#c3fdff',
    borderBottomWidth: 2,
    paddingBottom: 10,
    margin: 10,
  },
});
export const product = StyleSheet.create({
  container: {
    flex: 2,
  },
});
export const header = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});
export const title = StyleSheet.create({
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#5d99c695',
  },
});
