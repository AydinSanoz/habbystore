import React from 'react';
import {Text} from 'react-native';
import {SearchBar} from '../components';
import Layout from '../components/Layout';

export function Favorites(props) {
  return (
    <Layout>
      <SearchBar placeholder="Enter a search key" {...props} />
      <Text>Favorites</Text>
    </Layout>
  );
}
