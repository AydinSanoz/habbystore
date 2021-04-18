import {Dimensions, StyleSheet, Platform} from 'react-native';

const width = Dimensions.get('window').width;

export const searchBarStyles = StyleSheet.create({
  container: {
    padding: Platform.OS == 'ios' ? 5 : 2,
    backgroundColor: '#fafafa',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#00000040',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
});
export const pCard = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#c3fdff',
    width: Dimensions.get('window').width * 0.95,
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  img: {
    flex: 1.5,
    height: 200,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 3,
    // marginTop: 10,
    // marginBottom: 10,
    padding: 20,
    alignItems: 'flex-start',
  },
  textContent: {},
  title: {},
  priceContent: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    flex: 1,
  },
  regularPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
  },
  price: {},

  ratingContent: {
    flexDirection: 'row',
  },
  rating: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottom: {
    flexDirection: 'row',
  },
  quantity: {
    flex: 1,
  },

  stock: {
    color: 'white',
    backgroundColor: 'red',
    fontWeight: 'bold',
  },
});
export const cCard = StyleSheet.create({
  container: {
    borderColor: '#80deea',
    borderBottomWidth: 1,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    paddingBottom: 10,
    padding: 10,
    flex: 1,
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
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',

    color: '#00000090',
    backgroundColor: '#fafafa',
    padding: 10,
  },
});
export const title = StyleSheet.create({
  container: {},
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#5d99c690',
  },
});
export const texts = StyleSheet.create({
  text1: {fontSize: 20, fontWeight: 'bold'},
  text2: {fontSize: 15},
});
