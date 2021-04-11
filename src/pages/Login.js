import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {SearchBar} from '../components';
import Layout from '../components/Layout';
import {layout} from '../styles';

export function Login(props) {
  return (
    <Layout>
      <SearchBar placeholder="Enter search key" {...props} />
      <Text>Login</Text>
    </Layout>
  );
}
