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
export const pCard = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
  },
  img: {
    height: 250,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
  },
});
export const cCard = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
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
    margin: 10,
    borderWidth: 1,
  },
  img: {
    width: 200,
    height: 250,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
  },
});
export const category = StyleSheet.create({
  container: {
    borderBottomColor: '#000',
    borderBottomWidth: 2,
  },
});
export const product = StyleSheet.create({
  container: {
    flex: 2,
    margin: 10,
  },
});
export const header = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    margin: 10,
  },
});
export const title = StyleSheet.create({
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#00000030',
  },
});
