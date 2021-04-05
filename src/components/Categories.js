import React, {useState, useEffect} from 'react';
import {View, FlatList, Text, ActivityIndicator} from 'react-native';
import {CategoryCard} from './';
import axios from 'axios';
import {category, header} from './styles';
import {useSelector} from 'react-redux';

export function Categories({navigation}) {
  const [categories, setCategories] = useState([]);
  const {value} = useSelector(state => state.search);

  console.log('🚀 ~ file: Categories.js ~ line 14 ~ Categories ~ value', value);

  useEffect(() => {
    axios
      .get('https://habby.store/wp-json/wc/store/products/categories')
      .then(({data}) => setCategories(data))
      .catch(err => console.log(err));
  }, []);

  const renderItem = ({item}) => (
    <CategoryCard item={item} navigation={navigation} />
  );
  return (
    <View style={category.container}>
      <Text style={header.text}>CATEGORIES</Text>
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
