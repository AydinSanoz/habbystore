import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {DetailedCard, SearchBar} from '../components';
import {layout} from '../styles';

let originalList = [];
export function Products({navigation, route}) {
  const [product, setProduct] = useState([]);
  const {value} = useSelector(state => state.search);
  const id = route.params.id;

  useEffect(() => {
    axios
      .get(`https://habby.store/wp-json/wc/store/products?category=${id}`)
      .then(({data}) => {
        setProduct(data);
        originalList = data;
      })
      .catch(err => console.log(err));
  }, [id]);

  useEffect(() => {
    const filteredData = originalList.filter(data => {
      const inputVal = value.toLowerCase().replace(/\s/g, '');
      const name = data.name.toLowerCase().replace(/\s/g, '');
      return name.indexOf(inputVal) > -1;
    });
    setProduct(filteredData);
  }, [value]);

  const renderItem = ({item}) => (
    <DetailedCard item={item} navigation={navigation} />
  );

  return (
    <SafeAreaView style={layout.container}>
      <View style={layout.container}>
        <SearchBar placeholder="Enter search key" />
        <FlatList
          data={product}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}
