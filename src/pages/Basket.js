import React from 'react';
import {FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {Layout, ProductsCard} from '../components';

export function Basket(props) {
  const {data} = useSelector(state => state.basket);
  console.log('🚀 ~ file: Basket.js ~ line 8 ~ Basket ~ states', data);
  const renderItem = ({item}) => <ProductsCard item={item} {...props} />;
  return (
    <Layout {...props}>
      <Text>Basket</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </Layout>
  );
}
