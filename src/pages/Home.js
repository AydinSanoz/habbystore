import React from 'react';
import {ScrollView} from 'react-native';
import {AllProducts} from '../components';

import {SearchBar, AboutUs, Motto} from '../components';
import Layout from '../components/Layout';

export function Home(props) {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <Layout color="red" {...props}>
      <SearchBar placeholder="Enter a search key" {...props} />
      <ScrollView>
        <AllProducts {...props} />
        <AboutUs {...props} />
        <Motto {...props} />
      </ScrollView>
    </Layout>
  );
}
