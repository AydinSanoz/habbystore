import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {ProductsCard, SearchBar, HeaderText} from '../components';
import {layout} from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

let originalList = [];

export function Products(props) {
  const [product, setProduct] = useState([]);
  const {value} = useSelector(state => state.search);
  const id = props.route.params.id;
  const name = props.route.params.name;

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
      const dataName = data.name.toLowerCase().replace(/\s/g, '');
      return dataName.indexOf(inputVal) > -1;
    });
    setProduct(filteredData);
  }, [value]);

  const renderItem = ({item}) => <ProductsCard item={item} {...props} />;

  return (
    <SafeAreaView style={layout.container}>
      <View style={layout.container}>
        <SearchBar placeholder="Enter search key" {...props} />
        <HeaderText>{name}</HeaderText>
        <FlatList
          data={product}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}
