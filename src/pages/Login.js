import React from 'react';
import {Text} from 'react-native';
import {Layout, SearchBar} from '../components';

export function Login(props) {
  return (
    <Layout>
      <SearchBar placeholder="Enter search key" {...props} />
      <Text>Login</Text>
    </Layout>
  );
}
