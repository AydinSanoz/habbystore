import {Dimensions, StyleSheet, Platform} from 'react-native';

const width = Dimensions.get('window').width;

export const searchBarStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS == 'ios' ? 10 : 5,
    borderRadius: 10,
    backgroundColor: '#80deea',
    marginRight: 10,
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
    borderColor: '#80deea',
    borderWidth: 2,
    margin: 10,
  },
  img: {
    resizeMode: 'contain',
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
export const imageCard = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#c3fdff',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    minWidth: width,
    minHeight: 400,
  },
});
export const product = StyleSheet.create({
  container: {
    flex: 2,
  },
});
export const header = StyleSheet.create({
  container: {
    margin: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: '#b4ffff',
    backgroundColor: '#4bacb8',
  },
});
export const title = StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#5d99c690',
  },
});
