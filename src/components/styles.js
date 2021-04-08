import {Dimensions, StyleSheet, Platform} from 'react-native';

const width = Dimensions.get('window').width;

export const searchBarStyles = StyleSheet.create({
  container: {
    padding: Platform.OS == 'ios' ? 5 : 2,
    backgroundColor: '#fafafa',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#00000040',
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
    flex: 2,
    alignItems: 'flex-start',
  },
  textContent: {
    flex: 1,
  },
  title: {
    textTransform: 'capitalize',
  },
  priceContent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 5,
    marginBottom: 5,
  },
  regularPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
  },
  price: {
    fontWeight: 'bold',
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  stock: {
    color: 'white',
    backgroundColor: 'red',
    fontWeight: 'bold',
  },
  quantity: {
    flex: 1,
  },
});
export const cCard = StyleSheet.create({
  container: {
    borderColor: '#80deea',
    borderBottomWidth: 1,
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
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',

    color: '#00000090',
    backgroundColor: '#fafafa',
    padding: 5,
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
