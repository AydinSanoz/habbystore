import React from 'react';
import {FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {Layout, ProductsCard} from '../components';
import SvgAccountCircle from '../components/icons/AccountCircle';

export function Favorites(props) {
  const {data} = useSelector(state => state.favorites);
  console.log('🚀 ~ file: Favorites.js ~ line 8 ~ Favorites ~ states', data);
  const renderItem = ({item}) => <ProductsCard item={item} {...props} />;
  return (
    <Layout {...props}>
      <Text>Favorites</Text>
      <SvgAccountCircle fill="red" stroke="blue" width="40" height="40" />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </Layout>
  );
}
