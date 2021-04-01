import React, {useState, useEffect} from 'react';

import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {ProductCard} from './';
import axios from 'axios';
import {header, product} from './styles';

let originalList = [];
export function Product(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://habby.store/wp-json/wc/store/products')
      .then(({data}) => {
        setProducts(data);
        originalList = {...data};
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const filteredData = search => {
      originalList.forEach(product => {
        console.log(product.name);
      });
    };
  }, []);

  const renderItem = ({item}) => <ProductCard item={item} />;

  return (
    <View style={product.container}>
      <Text style={header.text}>PRODUCTS</Text>
      {!products.length ? (
        <ActivityIndicator size="large" color="#c3fdff" />
      ) : (
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          numColumns={2}
        />
      )}
    </View>
  );
}
