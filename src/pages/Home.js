import React from 'react';
import {ScrollView} from 'react-native';

import {SearchBar, AboutUs, Motto} from '../components';
import Layout from '../components/Layout';

export function Home(props) {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <Layout {...props}>
      <SearchBar placeholder="Enter a search key" {...props} />
      <ScrollView>
        <AboutUs {...props} />
        <Motto {...props} />
      </ScrollView>
    </Layout>
  );
}
