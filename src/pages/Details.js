import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';
import {DetailedCard, SearchBar} from '../components';
import {layout} from '../styles';

export function Details({navigation, route}) {
  const [product, setProduct] = useState([]);
  const id = route.params.id;

  useEffect(() => {
    axios
      .get(`https://habby.store/wp-json/wc/store/products?category=${id}`)
      .then(({data}) => setProduct(data))
      .catch(err => console.log(err));
  }, [id]);

  const renderItem = ({item}) => <DetailedCard item={item} />;

  return (
    <SafeAreaView style={layout.container}>
      <View style={layout.container}>
        <SearchBar />
        <FlatList
          data={product}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}
