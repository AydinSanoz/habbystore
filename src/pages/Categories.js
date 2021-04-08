import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {CategoryCard, Drawer, HeaderText, SearchBar} from '../components';
import axios from 'axios';
import {category, header} from '../components/styles';
import {useSelector} from 'react-redux';
import {layout} from '../styles';

let originalList = [];
export function Categories(props) {
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

  const renderItem = ({item}) => <CategoryCard item={item} {...props} />;
  return (
    <SafeAreaView style={layout.container}>
      <View style={layout.container}>
        <SearchBar placeholder="Enter search key" {...props}>
          {<Drawer {...props} />}
        </SearchBar>

        <View style={category.container}>
          <HeaderText {...props}>CATEGORIES</HeaderText>
          {!categories.length ? (
            <ActivityIndicator size="large" color="#c3fdff" />
          ) : (
            <FlatList
              data={categories}
              renderItem={renderItem}
              keyExtractor={(_, index) => index.toString()}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
