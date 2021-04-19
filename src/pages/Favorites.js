import React from 'react';
import {Text} from 'react-native';
import {Layout, SearchBar} from '../components';

export function Favorites(props) {
  return (
    <Layout>
      <SearchBar placeholder="Enter a search key" {...props} />
      <Text>Favorites</Text>
    </Layout>
  );
}
