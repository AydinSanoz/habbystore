import React, {useState, useEffect} from 'react';
import {View, FlatList, Text, ActivityIndicator} from 'react-native';
import {CategoryCard} from './';
import axios from 'axios';
import {category, header} from './styles';
import {useSelector} from 'react-redux';
import HeaderText from './HeaderText';

let originalList = [];
export function Categories({navigation}) {
  const [categories, setCategories] = useState([]);
  const {value} = useSelector(state => state.search);

  useEffect(() => {
    axios
      .get('https://habby.store/wp-json/wc/store/products/categories')
      .then(({data}) => {
        setCategories(data);
        originalList = data;
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const filteredData = originalList.filter(data => {
      const inputVal = value.toLowerCase().replace(/\s/g, '');
      const name = data.name.toLowerCase().replace(/\s/g, '');
      return name.indexOf(inputVal) > -1;
    });
    setCategories(filteredData);
  }, [value]);

  const renderItem = ({item}) => (
    <CategoryCard item={item} navigation={navigation} />
  );
  return (
    <View style={category.container}>
      <HeaderText>CATEGORIES</HeaderText>
      {!categories.length ? (
        <ActivityIndicator size="large" color="#c3fdff" />
      ) : (
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          horizontal
        />
      )}
    </View>
  );
}
