import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {DetailedCard} from '../components';

export function Details({navigation, route}) {
  console.log(
    '🚀 ~ file: Details.js ~ line 6 ~ Details ~ route',
    route.params.id,
  );
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
    <SafeAreaView>
      <View>
        <Text>DETAILS</Text>
        <FlatList
          data={product}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}
